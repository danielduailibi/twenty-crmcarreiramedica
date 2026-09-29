# MVP Carreira Médica

Aplicação interna sobre Twenty para organizar prospecção de oportunidades de liderança médica, inicialmente coordenação/direção de UTI.

## Objetivo do MVP

Transformar pesquisa de mercado e networking profissional em um funil rastreável:

Instituição-alvo → decisores → contato validado → abordagem → follow-up → conversa/reunião → oportunidade → proposta/processo seletivo → resultado.

## Modelo de dados

### Instituição
Hospital, grupo hospitalar, operadora ou organização de saúde.

Campos mínimos:
- nome
- grupo/rede
- cidade/UF
- website
- perfil da instituição
- possui UTI
- complexidade estimada
- prioridade
- fonte
- data da última validação

### Decisor
Pessoa em posição profissional relevante para a oportunidade.

Campos mínimos:
- nome completo
- cargo
- instituição
- e-mail profissional
- telefone institucional/profissional
- LinkedIn ou outro perfil profissional público
- papel na decisão
- qualidade/confiança do contato
- fonte
- data da última validação

### Oportunidade
Possível posição, conversa ou processo profissional.

Pipeline inicial:
1. Instituição mapeada
2. Decisor identificado
3. Contato validado
4. Abordagem preparada
5. Contato realizado
6. Respondeu
7. Reunião/conversa
8. Oportunidade ativa
9. Processo/proposta
10. Ganho
11. Perdido
12. Nutrição futura

### Interação
Registro de e-mail, ligação, mensagem, reunião, indicação ou outro contato.

### Follow-up
Próxima ação, responsável, prazo e contexto.

## Scoring

Score de 0 a 100 para priorização, sem automatizar decisões humanas.

Componentes previstos:
- aderência da instituição ao objetivo profissional
- relevância/complexidade da UTI
- geografia
- senioridade e papel do contato
- qualidade dos dados
- sinais concretos de oportunidade
- força do relacionamento existente

## Princípios de dados

- priorizar fontes institucionais e profissionais públicas
- armazenar a URL/fonte e a data de validação
- evitar dados pessoais sem finalidade profissional clara
- não versionar leads, credenciais, tokens ou bases reais no Git
- deduplicar pessoas e instituições antes de campanhas
- contato em escala deve preservar personalização e possibilidade de opt-out

## Fases

### Fase 1 — CRM funcional
Objetos, campos, pipeline, views e tarefas.

### Fase 2 — Inteligência
Scoring, pesquisa assistida por IA, briefing da instituição e sugestão de abordagem.

### Fase 3 — Aquisição
Importação/enriquecimento de fontes permitidas, deduplicação e validação de contatos profissionais.

### Fase 4 — Automação
Follow-ups, alertas de oportunidade parada e preparação assistida de mensagens.

## Segurança

Dados reais ficam no banco do ambiente implantado. O repositório contém somente código, schema e documentação. Segredos devem ser fornecidos por variáveis de ambiente/secret manager.
