import { defineObject, FieldType } from 'twenty-sdk/define';

export const INFLUENCER_LEAD_OBJECT_UNIVERSAL_IDENTIFIER =
  '0685b7dd-270a-4749-9e77-d07f403d9965';
export const LEAD_NAME_FIELD_UNIVERSAL_IDENTIFIER =
  '474e2e45-7f35-446f-8610-8a774c77bd3c';
export const LEAD_PLATFORM_FIELD_UNIVERSAL_IDENTIFIER =
  '719d578b-30f5-4adb-a0b3-3fbdb0425d4c';
export const LEAD_HANDLE_FIELD_UNIVERSAL_IDENTIFIER =
  '276d02a5-65d4-4b7d-9365-bcc3cbaefbcd';
export const LEAD_PROFILE_URL_FIELD_UNIVERSAL_IDENTIFIER =
  '745e6920-f61a-4a03-962c-d63a64b5b633';
export const LEAD_SCORE_FIELD_UNIVERSAL_IDENTIFIER =
  '19d86e0f-1336-4116-8452-f9ef52ddc385';
export const LEAD_PRIORITY_FIELD_UNIVERSAL_IDENTIFIER =
  '8df23456-bc66-4f78-a35c-acbc5b295d89';
export const LEAD_STATUS_FIELD_UNIVERSAL_IDENTIFIER =
  '83701d47-1d84-48dc-9ed6-2f807da5b50b';
export const LEAD_SOURCE_URL_FIELD_UNIVERSAL_IDENTIFIER =
  'd55a8102-35dc-408c-bac3-579753727277';
export const LEAD_LAST_VERIFIED_FIELD_UNIVERSAL_IDENTIFIER =
  '74f630f4-1100-45bd-a6e5-19292a7af82b';

export default defineObject({
  universalIdentifier: INFLUENCER_LEAD_OBJECT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'influencerLead',
  namePlural: 'influencerLeads',
  labelSingular: 'Lead de parceria',
  labelPlural: 'Leads de parceria',
  description: 'Influenciadores e educadores médicos para parcerias de conteúdo.',
  icon: 'IconTargetArrow',
  labelIdentifierFieldMetadataUniversalIdentifier:
    LEAD_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: LEAD_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Nome',
      icon: 'IconUser',
    },
    {
      universalIdentifier: LEAD_PLATFORM_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'platform',
      label: 'Plataforma',
      icon: 'IconPlug',
      defaultValue: "'LINKEDIN'",
      options: [
        {
          id: 'b82470b0-9e1f-4a8c-bf23-5cd6d2af2469',
          value: 'INSTAGRAM',
          label: 'Instagram',
          position: 0,
          color: 'purple',
        },
        {
          id: 'de4d13d3-a3fe-4265-8eed-540eff0f1e1f',
          value: 'LINKEDIN',
          label: 'LinkedIn',
          position: 1,
          color: 'blue',
        },
      ],
    },
    {
      universalIdentifier: LEAD_HANDLE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'handle',
      label: 'Perfil',
      icon: 'IconAt',
    },
    {
      universalIdentifier: LEAD_PROFILE_URL_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'profileUrl',
      label: 'URL do perfil',
      icon: 'IconLink',
    },
    {
      universalIdentifier: 'd42a1ff1-4285-4a55-b2f3-1bb25fc0d3dc',
      type: FieldType.TEXT,
      name: 'niche',
      label: 'Nicho e função',
      icon: 'IconBook',
    },
    {
      universalIdentifier: 'c4ec82b2-308a-4273-bfa2-78e8191dfef7',
      type: FieldType.TEXT,
      name: 'location',
      label: 'Localização',
      icon: 'IconMapPin',
      isNullable: true,
    },
    {
      universalIdentifier: '13cf8407-20d3-4e48-966b-bf02d55c38c9',
      type: FieldType.NUMBER,
      name: 'followers',
      label: 'Seguidores',
      icon: 'IconUsers',
      isNullable: true,
    },
    {
      universalIdentifier: 'cba098dd-0fa1-414d-91c3-c8feaf043c3a',
      type: FieldType.NUMBER,
      name: 'engagementRate',
      label: 'Engajamento (%)',
      icon: 'IconChartBar',
      isNullable: true,
    },
    {
      universalIdentifier: LEAD_SCORE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      name: 'leadScore',
      label: 'Score',
      icon: 'IconTargetArrow',
    },
    {
      universalIdentifier: LEAD_PRIORITY_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'priority',
      label: 'Prioridade',
      icon: 'IconFlag',
      defaultValue: "'B'",
      options: [
        {
          id: '72ce6d15-3793-44e5-93c4-f3f510017f8a',
          value: 'A',
          label: 'A — abordar agora',
          position: 0,
          color: 'red',
        },
        {
          id: 'e6465a1e-bdad-4be3-a906-59fed2f5530b',
          value: 'B',
          label: 'B — validar',
          position: 1,
          color: 'orange',
        },
        {
          id: 'c9d02661-8343-4ca0-beb2-44cacd973a37',
          value: 'C',
          label: 'C — nutrir',
          position: 2,
          color: 'gray',
        },
      ],
    },
    {
      universalIdentifier: LEAD_STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      name: 'status',
      label: 'Status',
      icon: 'IconCheckbox',
      defaultValue: "'TO_VALIDATE'",
      options: [
        {
          id: 'bf2746e3-0148-4508-ade6-498d41b59a18',
          value: 'READY_FOR_CONTACT',
          label: 'Pronto para contato',
          position: 0,
          color: 'green',
        },
        {
          id: 'f8cb44f8-9edb-44cc-978d-7c031fd8f231',
          value: 'TO_VALIDATE',
          label: 'Validar perfil',
          position: 1,
          color: 'orange',
        },
        {
          id: '42054bf6-c02c-478a-9997-70b7b319eaaa',
          value: 'CONTACTED',
          label: 'Contatado',
          position: 2,
          color: 'blue',
        },
        {
          id: 'eb87db28-21d0-46a2-8d9e-93c039aef690',
          value: 'DO_NOT_CONTACT',
          label: 'Não contatar',
          position: 3,
          color: 'gray',
        },
      ],
    },
    {
      universalIdentifier: '8f9a5fbe-ce64-4d26-acf5-41b90aaf2ab8',
      type: FieldType.TEXT,
      name: 'businessEmail',
      label: 'E-mail profissional',
      icon: 'IconMail',
      isNullable: true,
    },
    {
      universalIdentifier: LEAD_SOURCE_URL_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'sourceUrl',
      label: 'Fonte pública',
      icon: 'IconExternalLink',
    },
    {
      universalIdentifier: LEAD_LAST_VERIFIED_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.DATE_TIME,
      name: 'lastVerifiedAt',
      label: 'Verificado em',
      icon: 'IconHistory',
    },
    {
      universalIdentifier: '7fab19b3-adb1-417a-b2d0-1f55163a9208',
      type: FieldType.TEXT,
      name: 'evidence',
      label: 'Evidência de aderência',
      icon: 'IconNotes',
    },
    {
      universalIdentifier: 'd8344e64-23cd-4ab2-9df4-60c3010b267b',
      type: FieldType.TEXT,
      name: 'recommendedApproach',
      label: 'Abordagem sugerida',
      icon: 'IconMessage',
    },
  ],
});
