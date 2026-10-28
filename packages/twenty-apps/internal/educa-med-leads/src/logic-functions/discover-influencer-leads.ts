import { CoreApiClient } from 'twenty-client-sdk/core';
import { defineLogicFunction } from 'twenty-sdk/define';

import { DISCOVERY_QUERIES } from '../discovery-config';
import {
  deduplicateLeads,
  scoreSearchResult,
  type PublicSearchResult,
  type ScoredLead,
} from '../lead-scoring';
import { searchPublicProfiles } from '../serper-client';

const handler = async (): Promise<{
  discovered: number;
  created: number;
  skippedExisting: number;
}> => {
  const apiKey = process.env.SERPER_API_KEY;
  if (!apiKey) {
    throw new Error('SERPER_API_KEY is required for public profile discovery');
  }

  const searchResults: PublicSearchResult[] = [];
  for (const query of DISCOVERY_QUERIES) {
    searchResults.push(...(await searchPublicProfiles(query, apiKey)));
  }

  const discoveredLeads = deduplicateLeads(
    searchResults
      .map(scoreSearchResult)
      .filter(
        (lead): lead is ScoredLead =>
          lead !== undefined && lead.leadScore >= 60,
      ),
  );

  const client = new CoreApiClient();
  const { influencerLeads } = await client.query({
    influencerLeads: {
      edges: { node: { handle: true, platform: true } },
    },
  });
  const existingIdentities = new Set(
    influencerLeads.edges.map(
      ({ node }) => `${node.platform}:${node.handle.toLocaleLowerCase('pt-BR')}`,
    ),
  );
  const newLeads = discoveredLeads.filter(
    (lead) => !existingIdentities.has(`${lead.platform}:${lead.handle}`),
  );

  if (newLeads.length > 0) {
    await client.mutation({
      createInfluencerLeads: {
        __args: { data: newLeads },
        id: true,
      },
    });
  }

  return {
    discovered: discoveredLeads.length,
    created: newLeads.length,
    skippedExisting: discoveredLeads.length - newLeads.length,
  };
};

export default defineLogicFunction({
  universalIdentifier: 'fc594b75-c8a2-44f1-b234-5592993277df',
  name: 'discover-influencer-leads',
  description:
    'Descobre perfis profissionais públicos, pontua e adiciona somente leads novos.',
  timeoutSeconds: 120,
  handler,
  httpRouteTriggerSettings: {
    path: '/educa-med-leads/discover',
    httpMethod: 'POST',
    isAuthRequired: true,
  },
  cronTriggerSettings: {
    pattern: '0 12 * * 1',
  },
});
