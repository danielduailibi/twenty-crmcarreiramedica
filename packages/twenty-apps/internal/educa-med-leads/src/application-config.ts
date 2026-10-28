import { defineApplication } from 'twenty-sdk/define';

import { DEFAULT_ROLE_UNIVERSAL_IDENTIFIER } from './roles/default-role';

export const APPLICATION_UNIVERSAL_IDENTIFIER =
  'ac649c48-3907-466f-b4ee-217305e114e5';

export default defineApplication({
  universalIdentifier: APPLICATION_UNIVERSAL_IDENTIFIER,
  displayName: 'EDUCA.MED Lead Sourcing',
  description:
    'Descobre, pontua e organiza parceiros públicos de educação médica para o time comercial.',
  defaultRoleUniversalIdentifier: DEFAULT_ROLE_UNIVERSAL_IDENTIFIER,
});
