# Maison Botanique

Loja demonstrativa de cosméticos feita como SPA estática, responsiva e sem dependências de build. O catálogo, carrinho, favoritos, pedidos de demonstração, ajustes visuais e alguns cadastros administrativos são armazenados no `localStorage` do navegador.

## Executar

Abra `index.html` diretamente em um navegador moderno. A interface usa rotas por hash (`#/produtos`, `#/admin` etc.), portanto não precisa de servidor ou instalação de pacotes. As imagens dos produtos demonstrativos e dos produtos Cosmobeauty mapeados ficam em `assets/products/`. Imagens de categorias e banners ainda podem ser carregadas remotamente do Unsplash.

## Rotas

Loja: `/`, `/produtos`, `/produto/:slug`, `/categoria/:slug`, `/marca/:slug`, `/carrinho`, `/checkout`, `/login`, `/cadastro`, `/minha-conta`, `/meus-pedidos`, `/pedido/:id`, `/favoritos`, `/sobre`, `/contato`, `/politica-privacidade` e `/termos`.

Administração: `/admin`, `/admin/produtos`, `/admin/catalogo` (categorias e marcas), `/admin/pedidos`, `/admin/estoque`, `/admin/clientes`, `/admin/financeiro`, `/admin/banners` e `/admin/configuracoes`.

Como o projeto não tem backend, as rotas são representadas no hash (por exemplo, `#/admin/produtos`). Checkout, pagamento, autenticação e relatórios são demonstrações locais, sem processamento financeiro ou transmissão de dados.

O painel permite manter produtos, estoque, categorias, marcas, banners, despesas e identidade visual no navegador. As imagens de produto e campanha podem ser informadas por URL HTTPS. Os dados de pedidos iniciais são exemplos e podem ser substituídos ao limpar os dados da página no navegador.

As imagens disponíveis dos produtos Cosmobeauty foram copiadas para `assets/products/`; `product-images.js` registra os vínculos por produto e as páginas de origem do fabricante. Para os produtos do catálogo Cosmopharma sem fotografia, a loja gera ilustrações vetoriais identificadas pelo nome e categoria; são representações gráficas, não fotos dos produtos reais.
