# Maison Botanique

## Projeto

- Aplicação estática em HTML, CSS e JavaScript, sem framework, servidor ou dependências de build.
- `index.html` é o ponto de entrada; `app.js` controla rotas por hash, dados e interações; `styles.css` e `theme.css` cuidam da interface.
- Manter toda a interface em português brasileiro e seguir a identidade premium existente.
- As rotas públicas e administrativas são hash routes. Atualizar o roteador em `app.js` ao criar telas.
- Carrinho, favoritos, conta demonstrativa, pedidos, estoque, avaliações, banners, taxonomias e preferências são persistidos em `localStorage`.
- Não tratar autenticação, pagamentos, envios, clientes ou relatórios como serviços reais: este workspace não possui backend.
- Imagens são URLs remotas do Unsplash; novos URLs cadastrados devem usar HTTPS.

## Verificação e execução

- Abrir `index.html` em um navegador moderno para executar. As imagens e fontes remotas precisam de conexão à internet.
- Node.js e npm não estão instalados no ambiente verificado; não há etapa de compilação para esta aplicação estática.
- Diagnósticos do editor foram executados nos arquivos HTML, CSS e JavaScript.

## Estado do setup

- [x] Requisitos definidos: e-commerce de cosméticos responsivo com painel administrativo demonstrativo.
- [x] Aplicação e estrutura do workspace criadas.
- [x] Loja, catálogo, checkout local e telas administrativas implementados.
- [x] Extensões não necessárias para este projeto estático.
- [x] README atualizado com rotas e limites da demonstração.
