import { defineObject, FieldType } from 'twenty-sdk/define';

export const INSTITUTION_UNIVERSAL_IDENTIFIER =
  '7d4525ec-e591-4084-bc6f-36272bf89217';
export const INSTITUTION_NAME_FIELD_UNIVERSAL_IDENTIFIER =
  '171d5529-5f21-4f1c-be69-bd486aa7f9b4';

export default defineObject({
  universalIdentifier: INSTITUTION_UNIVERSAL_IDENTIFIER,
  nameSingular: 'careerInstitution',
  namePlural: 'careerInstitutions',
  labelSingular: 'Instituição-alvo',
  labelPlural: 'Instituições-alvo',
  description: 'Hospitais e organizações de saúde mapeados para oportunidades profissionais',
  icon: 'IconBuildingHospital',
  labelIdentifierFieldMetadataUniversalIdentifier:
    INSTITUTION_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: INSTITUTION_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Instituição',
      icon: 'IconBuildingHospital',
    },
    {
      universalIdentifier: '38dd8861-230b-4580-8651-b3b7e2d911e1',
      type: FieldType.TEXT,
      name: 'groupName',
      label: 'Grupo / rede',
      icon: 'IconHierarchy',
      isNullable: true,
    },
    {
      universalIdentifier: 'bc8643f7-dd10-4730-b1ab-0e6228c1a51f',
      type: FieldType.TEXT,
      name: 'cityState',
      label: 'Cidade / UF',
      icon: 'IconMapPin',
      isNullable: true,
    },
    {
      universalIdentifier: 'adc6363a-cc30-4d89-a50d-e997efbac333',
      type: FieldType.LINKS,
      name: 'website',
      label: 'Website',
      icon: 'IconWorld',
      isNullable: true,
    },
    {
      universalIdentifier: '7737b414-a4b9-430c-a2f7-bac19e1df4f6',
      type: FieldType.BOOLEAN,
      name: 'hasAdultIcu',
      label: 'Possui UTI adulto',
      icon: 'IconHeartbeat',
      isNullable: true,
    },
    {
      universalIdentifier: '9fa028ac-d15c-478a-8551-574500c5a17d',
      type: FieldType.SELECT,
      name: 'priority',
      label: 'Prioridade',
      icon: 'IconTargetArrow',
      defaultValue: "'MEDIUM'",
      options: [
        { id: 'de5447da-e938-491d-abbc-dbfb773adc4a', value: 'HIGH', label: 'Alta', position: 0, color: 'red' },
        { id: '1f575cee-fd7d-4fd5-83c4-f3337cfdda78', value: 'MEDIUM', label: 'Média', position: 1, color: 'orange' },
        { id: 'c89784e6-82be-4fe8-80bd-8cbebe5cc671', value: 'LOW', label: 'Baixa', position: 2, color: 'gray' },
      ],
    },
    {
      universalIdentifier: '250e11be-41fb-429c-ae2d-afaf2bfd4022',
      type: FieldType.NUMBER,
      name: 'score',
      label: 'Score',
      icon: 'IconChartBar',
      isNullable: true,
    },
    {
      universalIdentifier: 'efe85377-67d5-4f28-98ec-c7f7546822ad',
      type: FieldType.TEXT,
      name: 'source',
      label: 'Fonte',
      icon: 'IconLink',
      isNullable: true,
    },
    {
      universalIdentifier: '81aa2e4c-db0a-4598-8d3e-99c30fd81955',
      type: FieldType.DATE,
      name: 'lastValidatedAt',
      label: 'Última validação',
      icon: 'IconCalendarCheck',
      isNullable: true,
    },
    {
      universalIdentifier: '2f121252-4b53-4ce0-8501-1f55e4be93a6',
      type: FieldType.RICH_TEXT,
      name: 'researchNotes',
      label: 'Notas de pesquisa',
      icon: 'IconNotes',
      isNullable: true,
    },
  ],
});
