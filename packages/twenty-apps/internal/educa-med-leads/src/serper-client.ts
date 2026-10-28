import type { PublicSearchResult } from './lead-scoring';

type SerperOrganicResult = {
  title?: unknown;
  link?: unknown;
  snippet?: unknown;
};

type SerperResponse = {
  organic?: unknown;
};

const isOrganicResult = (value: unknown): value is SerperOrganicResult =>
  typeof value === 'object' && value !== null;

export const searchPublicProfiles = async (
  query: string,
  apiKey: string,
): Promise<PublicSearchResult[]> => {
  const response = await fetch('https://google.serper.dev/search', {
    method: 'POST',
    headers: {
      'X-API-KEY': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ q: query, gl: 'br', hl: 'pt-br', num: 20 }),
  });

  if (!response.ok) {
    throw new Error(`Public search failed with status ${response.status}`);
  }

  const data = (await response.json()) as SerperResponse;
  if (!Array.isArray(data.organic)) return [];

  const observedAt = new Date().toISOString();

  return data.organic.filter(isOrganicResult).flatMap((result) => {
    if (
      typeof result.title !== 'string' ||
      typeof result.link !== 'string' ||
      typeof result.snippet !== 'string'
    ) {
      return [];
    }

    return [{ title: result.title, link: result.link, snippet: result.snippet, observedAt }];
  });
};
