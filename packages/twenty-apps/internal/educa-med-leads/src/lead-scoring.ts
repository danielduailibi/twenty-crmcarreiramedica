export type PublicSearchResult = {
  title: string;
  link: string;
  snippet: string;
  observedAt: string;
};

export type ScoredLead = {
  name: string;
  platform: 'INSTAGRAM' | 'LINKEDIN';
  handle: string;
  profileUrl: string;
  niche: string;
  followers?: number;
  leadScore: number;
  priority: 'A' | 'B' | 'C';
  status: 'READY_FOR_CONTACT' | 'TO_VALIDATE';
  businessEmail?: string;
  sourceUrl: string;
  lastVerifiedAt: string;
  evidence: string;
  recommendedApproach: string;
};

const HIGH_FIT_TERMS = [
  'educação médica',
  'educacao medica',
  'residência médica',
  'residencia medica',
  'estudantes de medicina',
  'ensino médico',
  'ensino medico',
  'professor de medicina',
  'preceptor',
];

const AUTHORITY_TERMS = [
  'médico',
  'médica',
  'medico',
  'medica',
  'professor',
  'doutor',
  'phd',
  'crm',
  'universidade',
  'hospital',
];

const PARTNERSHIP_TERMS = [
  'criador',
  'conteúdo',
  'conteudo',
  'palestrante',
  'curso',
  'consultor',
  'cofundador',
  'fundador',
];

const normalize = (value: string) => value.toLocaleLowerCase('pt-BR');

const countMatches = (text: string, terms: string[]) =>
  terms.filter((term) => text.includes(term)).length;

const extractPlatform = (url: string): ScoredLead['platform'] | undefined => {
  if (url.includes('instagram.com/')) return 'INSTAGRAM';
  if (url.includes('linkedin.com/in/')) return 'LINKEDIN';
  return undefined;
};

const extractHandle = (url: string, platform: ScoredLead['platform']) => {
  const parsedUrl = new URL(url);
  const parts = parsedUrl.pathname.split('/').filter(Boolean);
  const rawHandle = platform === 'LINKEDIN' && parts[0] === 'in' ? parts[1] : parts[0];
  return rawHandle ? `@${rawHandle.toLocaleLowerCase('pt-BR')}` : '';
};

const extractEmail = (text: string) =>
  text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0];

export const scoreSearchResult = (
  result: PublicSearchResult,
): ScoredLead | undefined => {
  const platform = extractPlatform(result.link);
  if (!platform) return undefined;

  const searchableText = normalize(`${result.title} ${result.snippet}`);
  const fitMatches = countMatches(searchableText, HIGH_FIT_TERMS);
  const authorityMatches = countMatches(searchableText, AUTHORITY_TERMS);
  const partnershipMatches = countMatches(searchableText, PARTNERSHIP_TERMS);
  const businessEmail = extractEmail(result.snippet);

  const audienceFit = Math.min(35, fitMatches * 16);
  const authority = Math.min(25, authorityMatches * 6);
  const partnershipFit = Math.min(15, partnershipMatches * 5);
  const contactability = businessEmail ? 10 : 3;
  const evidenceQuality = result.snippet.length >= 80 ? 10 : 5;
  const platformFit = platform === 'INSTAGRAM' ? 5 : 4;
  const leadScore = Math.min(
    100,
    audienceFit + authority + partnershipFit + contactability + evidenceQuality + platformFit,
  );

  const priority = leadScore >= 75 ? 'A' : leadScore >= 60 ? 'B' : 'C';
  const status =
    leadScore >= 75 && (businessEmail || platform === 'LINKEDIN')
      ? 'READY_FOR_CONTACT'
      : 'TO_VALIDATE';
  const handle = extractHandle(result.link, platform);
  if (!handle) return undefined;

  return {
    name: result.title.split('|')[0]?.split('-')[0]?.trim() || handle,
    platform,
    handle,
    profileUrl: result.link,
    niche: fitMatches > 0 ? 'Educação médica' : 'Saúde e medicina',
    leadScore,
    priority,
    status,
    businessEmail,
    sourceUrl: result.link,
    lastVerifiedAt: result.observedAt,
    evidence: result.snippet.slice(0, 500),
    recommendedApproach:
      fitMatches >= 2
        ? 'Propor vídeo-piloto para estudantes e residentes, citando um conteúdo recente.'
        : 'Validar audiência médica antes de oferecer a parceria.',
  };
};

export const deduplicateLeads = (leads: ScoredLead[]) => {
  const byIdentity = new Map<string, ScoredLead>();

  for (const lead of leads) {
    const identity = `${lead.platform}:${lead.handle}`;
    const current = byIdentity.get(identity);
    if (!current || lead.leadScore > current.leadScore) {
      byIdentity.set(identity, lead);
    }
  }

  return [...byIdentity.values()].sort((left, right) =>
    right.leadScore - left.leadScore || left.name.localeCompare(right.name, 'pt-BR'),
  );
};
