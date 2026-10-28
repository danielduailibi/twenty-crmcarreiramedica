# EDUCA.MED Lead Sourcing

Aplicativo do Twenty para descobrir e organizar parceiros de educação médica para a Luana.

## O que já está pronto

- Objeto `Lead de parceria` com score, prioridade, status, fonte e abordagem sugerida.
- Fila `Fila comercial da Luana` na navegação do Twenty.
- Dez leads iniciais com evidência pública e data de verificação.
- Descoberta semanal de perfis públicos por consultas de educação médica.
- Deduplicação por plataforma e perfil.
- Corte automático: somente leads com score igual ou superior a 60 entram no CRM.
- Perfis com score 75+ e evidência suficiente entram como `Pronto para contato`.

O coletor usa resultados públicos de pesquisa e não contorna login, CAPTCHA, robots.txt ou proteções do Instagram e LinkedIn. Ele também não envia mensagens automaticamente.

## Configuração

1. Entre nesta pasta.
2. Autentique o workspace:

```bash
yarn twenty remote:add --api-url https://SEU-TWENTY --as producao
```

3. Configure `SERPER_API_KEY` no ambiente das funções do Twenty.
4. Sincronize para desenvolvimento:

```bash
yarn twenty dev
```

5. Publique como aplicação privada quando a validação estiver concluída:

```bash
yarn twenty app:publish --private
```

O job roda às segundas-feiras, 12h UTC (9h em São Paulo), e também pode ser acionado por `POST /s/educa-med-leads/discover` com autenticação.

## Uso comercial

Luana deve trabalhar primeiro os registros de prioridade `A — abordar agora`. Antes do contato, ela deve abrir a fonte, confirmar a atividade recente do perfil e personalizar a primeira linha da abordagem. Pedidos de não contato devem ser registrados imediatamente como `Não contatar`.

## Importação provisória

Enquanto o app não estiver publicado, `data/initial-leads.csv` pode ser importado diretamente no Twenty. Os nomes das colunas correspondem aos campos do objeto.
