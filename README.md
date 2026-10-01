# Maison Botanique

Loja demonstrativa de cosméticos feita como SPA estática, responsiva e sem dependências de build. O catálogo, carrinho, favoritos, pedidos de demonstração, ajustes visuais e alguns cadastros administrativos são armazenados no `localStorage` do navegador.

## Executar

Abra `index.html` diretamente em um navegador moderno. A interface usa rotas por hash (`#/produtos`, `#/admin` etc.), portanto não precisa de servidor ou instalação de pacotes. As fotografias são carregadas de imagens remotas do Unsplash e precisam de conexão à internet.

## Rotas

Loja: `/`, `/produtos`, `/produto/:slug`, `/categoria/:slug`, `/marca/:slug`, `/carrinho`, `/checkout`, `/login`, `/cadastro`, `/minha-conta`, `/meus-pedidos`, `/pedido/:id`, `/favoritos`, `/sobre`, `/contato`, `/politica-privacidade` e `/termos`.

Administração: `/admin`, `/admin/produtos`, `/admin/catalogo` (categorias e marcas), `/admin/pedidos`, `/admin/estoque`, `/admin/clientes`, `/admin/financeiro`, `/admin/banners` e `/admin/configuracoes`.

Como o projeto não tem backend, as rotas são representadas no hash (por exemplo, `#/admin/produtos`). Checkout, pagamento, autenticação e relatórios são demonstrações locais, sem processamento financeiro ou transmissão de dados.

O painel permite manter produtos, estoque, categorias, marcas, banners, despesas e identidade visual no navegador. As imagens de produto e campanha podem ser informadas por URL HTTPS. Os dados de pedidos iniciais são exemplos e podem ser substituídos ao limpar os dados da página no navegador.
