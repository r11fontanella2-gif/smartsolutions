# M&G Teck

Landing page estática em HTML, CSS e JavaScript, sem dependências de instalação. Marca: **M&G Teck**. Razão social: **M&G Teck Ltda.**

## Executar

`node scripts/serve.mjs` inicia a prévia na porta 4173.

`node --check public/app.js` e `node --check public/config.js` verificam a sintaxe.

`node scripts/build.mjs` gera a pasta `dist`. Também é possível usar `npm run build` quando npm estiver disponível.

Na Vercel, usar preset Other, build `node scripts/build.mjs` e saída `dist`. As páginas legais são documentos HTML reais; não exigem rewrites.

## Configuração comercial pendente

`public/config.js` centraliza o WhatsApp confirmado (21) 99088-1415, o canal de vendas e o convite do grupo, preservado exatamente como confirmado pelo responsável. Grupos usam o formato `{ name, url }`. O botão “Entrar no grupo de WhatsApp” abre diretamente o convite em nova aba. Os CTAs e o formulário abrem o WhatsApp com texto contextual, sem enviar mensagens automaticamente.

Endereço, horários, e-mail, redes sociais, preços, região de coleta, garantias comerciais e depoimentos reais não foram fornecidos e não são apresentados como fatos. Não foram fornecidas fotos de antes/depois de um mesmo reparo; as imagens recebidas são usadas apenas como vitrine de aparelhos.

O endereço da hospedagem fica em `business.siteUrl`. O build gera URLs canônicas, imagem Open Graph absoluta, dados estruturados a partir da configuração, `robots.txt` e `sitemap.xml`. Ao mudar de domínio, atualizar essa configuração e gerar o build novamente. Confirmar as informações comerciais pendentes com o responsável antes da divulgação pública.

## Interface

Nove fotos fornecidas, convertidas em WebP, carrossel em loop com pausa e movimento reduzido, navegação móvel, perguntas expansíveis, grupo e canal em destaque. O formulário exibe perguntas de diagnóstico para assistência, recuperação de acesso e coleta; esses campos não são enviados nas consultas de compra. A confirmação de propriedade é obrigatória apenas para recuperação de acesso. Fotos são enviadas pelo cliente na conversa do WhatsApp, sem simular upload no site.

Não há backend, armazenamento local de dados pessoais, analytics ou cookies próprios. Fontes são carregadas pelo Google Fonts, com alternativas locais do sistema.

## Hospedagem

O projeto Sites está identificado em `.openai/hosting.json` e usa `dist` como saída estática. A versão de revisão é privada. Publicação na Vercel permanece possível com os comandos acima.
