import { describe, expect, it } from 'vitest';

import { deduplicateLeads, scoreSearchResult } from './lead-scoring';

describe('lead scoring', () => {
  it('prioritizes a medical educator with a public business contact', () => {
    const lead = scoreSearchResult({
      title: 'Maria Silva | LinkedIn',
      link: 'https://br.linkedin.com/in/maria-silva',
      snippet:
        'Médica, professora e criadora de conteúdo sobre educação médica e residência médica. Contato: maria@example.com',
      observedAt: '2026-10-28T12:00:00.000Z',
    });

    expect(lead?.priority).toBe('A');
    expect(lead?.status).toBe('READY_FOR_CONTACT');
    expect(lead?.businessEmail).toBe('maria@example.com');
  });

  it('keeps the best evidence when the same profile appears twice', () => {
    const baseLead = scoreSearchResult({
      title: 'João | LinkedIn',
      link: 'https://br.linkedin.com/in/joao',
      snippet: 'Médico.',
      observedAt: '2026-10-28T12:00:00.000Z',
    });
    const strongerLead = scoreSearchResult({
      title: 'João | LinkedIn',
      link: 'https://br.linkedin.com/in/joao',
      snippet:
        'Médico, professor e criador de conteúdo sobre educação médica e residência médica.',
      observedAt: '2026-10-28T12:00:00.000Z',
    });

    const uniqueLeads = deduplicateLeads(
      [baseLead, strongerLead].filter((lead) => lead !== undefined),
    );

    expect(uniqueLeads).toHaveLength(1);
    expect(uniqueLeads[0]?.leadScore).toBe(strongerLead?.leadScore);
  });
});
