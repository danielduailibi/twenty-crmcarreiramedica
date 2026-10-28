import { CoreApiClient } from 'twenty-client-sdk/core';
import { definePostInstallLogicFunction } from 'twenty-sdk/define';

import { INITIAL_LEADS } from '../seeds/initial-leads';

const handler = async (): Promise<void> => {
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
  const missingLeads = INITIAL_LEADS.filter(
    (lead) => !existingIdentities.has(`${lead.platform}:${lead.handle}`),
  );

  if (missingLeads.length === 0) return;

  await client.mutation({
    createInfluencerLeads: {
      __args: { data: missingLeads },
      id: true,
    },
  });
};

export default definePostInstallLogicFunction({
  universalIdentifier: '90a20778-ab8b-4646-822f-b0ad836731a9',
  name: 'post-install',
  description: 'Carrega a primeira fila de leads públicos já avaliados.',
  timeoutSeconds: 30,
  handler,
});
