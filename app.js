const photo = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
const products = [
  { id: 'serum-vital', slug: 'serum-vital', name: 'Sérum Vital C + E', brand: 'Botanique Lab', category: 'Skincare', price: 189, oldPrice: 229, rating: '4.9', reviews: 86, badge: 'Mais vendido', stock: 24, image: 'photo-1608248543803-ba4f8c70ae0b', description: 'Um concentrado diário de vitamina C e E que ilumina, uniformiza e protege a pele. Textura leve, absorção rápida e ativos de origem botânica.' },
  { id: 'oleo-facial', slug: 'oleo-facial-noturno', name: 'Óleo Facial Noturno', brand: 'Maison Botanique', category: 'Skincare', price: 156, oldPrice: 195, rating: '4.8', reviews: 52, badge: '20% OFF', stock: 8, image: 'photo-1601049541289-9b1b7bbbfe19', description: 'Óleos vegetais prensados a frio para nutrir e devolver o viço enquanto você descansa. Duas gotas são suficientes para o ritual da noite.' },
  { id: 'creme-calendula', slug: 'creme-calmante-calendula', name: 'Creme Calmante Calêndula', brand: 'Terra Serena', category: 'Corpo', price: 112, oldPrice: null, rating: '4.9', reviews: 31, badge: 'Novo', stock: 16, image: 'photo-1556229010-6c3f2c9ca5f8', description: 'Conforto para peles sensibilizadas com calêndula, aveia coloidal e uma fórmula gentil para o uso diário.' },
  { id: 'balm-labial', slug: 'balm-labial-rosa', name: 'Balm Labial Rosa Silvestre', brand: 'Botanique Lab', category: 'Maquiagem', price: 68, oldPrice: null, rating: '4.7', reviews: 104, badge: '', stock: 42, image: 'photo-1608571423902-eed4a5ad8108', description: 'Cor suave, brilho natural e manteiga de karité em uma fórmula confortável que acompanha o dia todo.' },
  { id: 'mascara-nutritiva', slug: 'mascara-nutritiva', name: 'Máscara Nutritiva de Murumuru', brand: 'Raiz & Ritual', category: 'Cabelos', price: 98, oldPrice: 124, rating: '4.8', reviews: 63, badge: 'Mais vendido', stock: 11, image: 'photo-1598440947619-2c35fc9aa908', description: 'Tratamento intensivo com manteiga de murumuru para devolver maciez e movimento aos fios.' },
  { id: 'agua-essencial', slug: 'agua-essencial-neroli', name: 'Água Essencial de Neroli', brand: 'Maison Botanique', category: 'Perfumes', price: 174, oldPrice: null, rating: '5.0', reviews: 28, badge: 'Novo', stock: 6, image: 'photo-1596462502278-27bfdc403348', description: 'Uma fragrância delicada, cítrica e luminosa, feita para perfumar a pele sem pressa.' },
  { id: 'esfoliante-corporal', slug: 'esfoliante-corporal-cafe', name: 'Esfoliante Corporal de Café', brand: 'Terra Serena', category: 'Corpo', price: 89, oldPrice: 105, rating: '4.6', reviews: 42, badge: '15% OFF', stock: 19, image: 'photo-1611930022073-b7a4ba5fcccd', description: 'Esfoliação gentil com café de origem responsável e óleos nutritivos para uma pele macia e renovada.' },
  { id: 'kit-ritual', slug: 'kit-ritual-manhã', name: 'Kit Ritual da Manhã', brand: 'Maison Botanique', category: 'Kits', price: 248, oldPrice: 310, rating: '4.9', reviews: 74, badge: '20% OFF', stock: 9, image: 'photo-1608248543803-ba4f8c70ae0b', description: 'Três essenciais para começar o dia: limpeza gentil, hidratação e proteção em um só ritual.' },
  { id: 'sabonete-aveia', slug: 'sabonete-aveia-coloidal', name: 'Sabonete de Aveia Coloidal', brand: 'Terra Serena', category: 'Higiene', price: 54, oldPrice: null, rating: '4.8', reviews: 19, badge: 'Novo', stock: 27, image: 'photo-1608248543803-ba4f8c70ae0b', description: 'Limpeza suave para o uso diário, com aveia coloidal e ingredientes que respeitam a barreira natural da pele.' }
];
let categories = [
  { name: 'Skincare', slug: 'skincare', sub: 'Cuidado essencial', image: 'photo-1556229010-6c3f2c9ca5f8' },
  { name: 'Maquiagem', slug: 'maquiagem', sub: 'Beleza natural', image: 'photo-1608571423902-eed4a5ad8108' },
  { name: 'Cabelos', slug: 'cabelos', sub: 'Rituais para os fios', image: 'photo-1598440947619-2c35fc9aa908' },
  { name: 'Corpo', slug: 'corpo', sub: 'Pausa e bem-estar', image: 'photo-1611930022073-b7a4ba5fcccd' },
  { name: 'Perfumes', slug: 'perfumes', sub: 'Notas que ficam', image: 'photo-1596462502278-27bfdc403348' },
  { name: 'Higiene', slug: 'higiene', sub: 'Cuidado de todo dia', image: 'photo-1608248543803-ba4f8c70ae0b' },
  { name: 'Kits', slug: 'kits', sub: 'Presentes com intenção', image: 'photo-1608248543803-ba4f8c70ae0b' },
  { name: 'Lançamentos', slug: 'lancamentos', sub: 'Novidades da Maison', image: 'photo-1556229010-6c3f2c9ca5f8' }
];
const seedOrders = [
  { id: 'MB-24081', customer: 'Marina Costa', email: 'marina@email.com', date: '2026-09-28', status: 'Enviado', total: 345, items: [{ id: 'serum-vital', qty: 1 }, { id: 'balm-labial', qty: 1 }, { id: 'esfoliante-corporal', qty: 1 }] },
  { id: 'MB-24080', customer: 'Luiza Martins', email: 'luiza@email.com', date: '2026-09-27', status: 'Processando', total: 248, items: [{ id: 'kit-ritual', qty: 1 }] },
  { id: 'MB-24079', customer: 'Ana Beatriz', email: 'ana@email.com', date: '2026-09-26', status: 'Entregue', total: 268, items: [{ id: 'oleo-facial', qty: 1 }, { id: 'creme-calendula', qty: 1 }] },
  { id: 'MB-24078', customer: 'Clara Nunes', email: 'clara@email.com', date: '2026-09-25', status: 'Pendente', total: 174, items: [{ id: 'agua-essencial', qty: 1 }] }
];
const money = value => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value || 0);
const read = (key, fallback) => { try { const value = localStorage.getItem(`mb_${key}`); return value ? JSON.parse(value) : fallback; } catch { return fallback; } };
const write = (key, value) => { try { localStorage.setItem(`mb_${key}`, JSON.stringify(value)); } catch {} };
categories = read('categories', categories);
const catalogCategories = [
  { name: 'Injetáveis', slug: 'injetaveis', sub: 'Tabela técnica Cosmopharma', image: 'photo-1556229010-6c3f2c9ca5f8' },
  { name: 'Protocolos', slug: 'protocolos', sub: 'Protocolos do catálogo', image: 'photo-1611930022073-b7a4ba5fcccd' },
  { name: 'Nutracêuticos', slug: 'nutraceuticos', sub: 'Linha nutracêutica', image: 'photo-1608571423902-eed4a5ad8108' }
];
let categoriesChanged = false;
for (const category of catalogCategories) {
  if (!categories.some(item => item.slug === category.slug)) { categories.push(category); categoriesChanged = true; }
}
if (categoriesChanged) write('categories', categories);
let customBrands = read('brands', []);
let cart = read('cart', []), favorites = read('favorites', []), orders = read('orders', seedOrders);
let customProducts = read('products', []), expenses = read('expenses', []), banners = read('banners', []), reviews = read('reviews', {});
let settings = read('settings', { primary: '#44553e', secondary: '#dce4cf', button: '#44553e', background: '#f6f5f0', logo: 'Maison Botanique', font: 'Manrope', favicon: 'favicon.svg' });
let catalogFilters = { category: '', brand: '', onlySale: false, sort: 'featured', search: '' }, detailQty = 1, searchOpen = false;
const allProducts = () => [...new Map([...(window.COSMOPHARMA_PRODUCTS || []), ...products, ...customProducts].map(product => [product.id, product])).values()];
const productById = id => allProducts().find(item => item.id === id);
const findProduct = slug => allProducts().find(item => item.slug === slug || item.id === slug);
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const icon = name => {
  const paths = {
    search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path>',
    user: '<circle cx="12" cy="8" r="3.5"></circle><path d="M5 21a7 7 0 0 1 14 0"></path>',
    heart: '<path d="M20.8 8.7c0 5.2-8.8 10.3-8.8 10.3S3.2 13.9 3.2 8.7A4.6 4.6 0 0 1 12 6.5a4.6 4.6 0 0 1 8.8 2.2Z"></path>',
    bag: '<path d="M4 8h16l-1 13H5L4 8Z"></path><path d="M9 8V6a3 3 0 0 1 6 0v2"></path>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"></path>',
    close: '<path d="m6 6 12 12M18 6 6 18"></path>',
    arrow: '<path d="M4 12h15M13 5l7 7-7 7"></path>',
    home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10Z"></path>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || ''}</svg>`;
};
const route = () => decodeURIComponent(location.hash.slice(1) || '/').replace(/\/$/, '') || '/';
const go = path => { location.hash = path; };
const toast = message => { const node = document.querySelector('#toast'); if (!node) return; node.textContent = message; node.classList.add('is-visible'); clearTimeout(window.toastTimer); window.toastTimer = setTimeout(() => node.classList.remove('is-visible'), 2600); };
const isLocalProductImage = image => /^data:image\/(?:webp|jpeg|png);base64,/i.test(image || '');
const getImage = (product, width = 800) => escapeHTML(product.image?.startsWith('https://') || isLocalProductImage(product.image) ? product.image : product.catalogDetails ? 'catalog-placeholder.svg' : photo(product.image, width));
async function compressProductImage(file) {
  if (!/^image\/(?:jpeg|png|webp|avif)$/.test(file.type)) throw new Error('Escolha uma imagem JPG, PNG, WebP ou AVIF.');
  if (file.size > 12 * 1024 * 1024) throw new Error('A imagem deve ter até 12 MB.');
  const source = await createImageBitmap(file);
  const scale = Math.min(1, 1200 / Math.max(source.width, source.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(source.width * scale);
  canvas.height = Math.round(source.height * scale);
  const context = canvas.getContext('2d');
  if (!context) { source.close(); throw new Error('Não foi possível processar esta imagem.'); }
  context.drawImage(source, 0, 0, canvas.width, canvas.height);
  source.close();
  const image = canvas.toDataURL('image/webp', 0.82);
  if (image.length > 900_000) throw new Error('A imagem comprimida ficou grande demais. Escolha uma imagem menor.');
  return image;
}
const isFav = id => favorites.includes(id);
function productCard(product) {
  const badgeClass = product.oldPrice ? 'sale' : '';
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
  const displayBadge = product.priceBasis ? (product.priceBasis === 'box' ? 'Preço por caixa' : 'Preço unitário') : product.badge;
  const rating = product.rating ? `<div class="product-rating">★ ★ ★ ★ ★ <span>${escapeHTML(product.rating)} (${product.reviews})</span></div>` : '';
  const quickAdd = product.catalogDetails && !product.stock
    ? '<button class="button" disabled>Estoque não informado</button>'
    : `<button class="button" data-action="add" data-id="${escapeHTML(product.id)}">Adicionar à sacola · ${money(product.price)}</button>`;
  return `<article class="product-card animate-in"><div class="product-image"><a href="#/produto/${encodeURIComponent(product.slug)}" aria-label="Ver ${escapeHTML(product.name)}"><img loading="lazy" src="${getImage(product, 640)}" alt="${escapeHTML(product.name)}"></a>${displayBadge ? `<span class="product-badge ${badgeClass}">${escapeHTML(displayBadge)}</span>` : ''}<button class="favorite-button ${isFav(product.id) ? 'is-active' : ''}" data-action="favorite" data-id="${escapeHTML(product.id)}" aria-label="${isFav(product.id) ? 'Remover dos' : 'Adicionar aos'} favoritos">${icon('heart')}</button><div class="quick-add">${quickAdd}</div></div><div class="product-meta"><div class="product-brand">${escapeHTML(product.brand)}</div><a class="product-name" href="#/produto/${encodeURIComponent(product.slug)}">${escapeHTML(product.name)}</a>${rating}<div class="product-price">${money(product.price)}${product.oldPrice ? `<span class="old-price">${money(product.oldPrice)}</span><span class="discount-note">-${discount}%</span>` : ''}</div></div></article>`;
}
function header() {
  const count = cart.reduce((total, line) => total + line.qty, 0);
  return `<div class="announcement">Cuidado que chega até você · frete grátis acima de R$ 249</div><header class="site-header"><div class="header-main"><button class="icon-button mobile-menu-button" data-action="menu" aria-label="Abrir menu">${icon('menu')}</button><a href="#/" class="brand" aria-label="Maison Botanique, início"><span class="brand-mark">M</span><span class="brand-word">${escapeHTML(settings.logo)}<small>BELEZA COM INTENÇÃO</small></span></a><nav class="main-nav" id="main-nav"><a href="#/produtos">Novidades</a><a href="#/categoria/skincare">Skincare</a><a href="#/categoria/corpo">Corpo</a><a href="#/categoria/cabelos">Cabelos</a><a href="#/sobre">Nossa essência</a></nav><div class="header-tools"><form class="search-form" data-form="search"><label class="sr-only" for="header-search">Buscar produtos</label>${icon('search')}<input id="header-search" name="q" placeholder="O que você procura?" value="${escapeHTML(catalogFilters.search)}"></form><button class="icon-button mobile-search" data-action="search" aria-label="Buscar">${icon('search')}</button><a class="icon-link" href="#/minha-conta" aria-label="Minha conta">${icon('user')}</a><a class="icon-link" href="#/favoritos" aria-label="Favoritos">${icon('heart')}${favorites.length ? `<span class="counter">${favorites.length}</span>` : ''}</a><a class="icon-link" href="#/carrinho" aria-label="Sacola">${icon('bag')}${count ? `<span class="counter">${count}</span>` : ''}</a></div></div></header>`;
}
function footer() {
  return `<footer class="site-footer"><div class="page-width"><div class="footer-grid"><div class="footer-brand"><a href="#/" class="brand"><span class="brand-mark">M</span><span class="brand-word">${escapeHTML(settings.logo)}<small>BELEZA COM INTENÇÃO</small></span></a><p>Rituais gentis, fórmulas cuidadosas e beleza no seu próprio ritmo. Feito para acompanhar a vida real.</p></div><div class="footer-column"><h3>Explore</h3><a href="#/produtos">Todos os produtos</a><a href="#/categoria/skincare">Skincare</a><a href="#/categoria/corpo">Corpo</a><a href="#/marca/maison-botanique">Maison Botanique</a></div><div class="footer-column"><h3>Atendimento</h3><a href="#/contato">Fale com a gente</a><a href="#/minha-conta">Minha conta</a><a href="#/meus-pedidos">Meus pedidos</a><p>Seg–Sex · 9h às 18h</p></div><div class="footer-column"><h3>Informações</h3><a href="#/sobre">Nossa história</a><a href="#/politica-privacidade">Privacidade</a><a href="#/termos">Termos de uso</a><p>Instagram · Pinterest</p></div></div><div class="footer-bottom"><span>© 2026 Maison Botanique · CNPJ 00.000.000/0001-00</span><span>Pagamento seguro · Pix · Cartões</span></div></div></footer><nav class="mobile-bottom" aria-label="Atalhos"><a href="#/">${icon('home')}Início</a><a href="#/produtos">${icon('search')}Explorar</a><a href="#/favoritos">${icon('heart')}Favoritos</a><a href="#/carrinho">${icon('bag')}Sacola</a></nav>`;
}
function pageBanner(title, subtitle = '', crumb = 'Início') {
  return `<section class="page-banner"><div class="page-width"><div class="breadcrumbs"><a href="#/">${escapeHTML(crumb)}</a>　/　${escapeHTML(title)}</div><h1>${escapeHTML(title)}</h1>${subtitle ? `<p>${escapeHTML(subtitle)}</p>` : ''}</div></section>`;
}
function categorySection() {
  return `<section class="section-tight"><div class="page-width"><div class="section-heading"><div><span class="eyebrow">Um ritual para cada você</span><h2>Encontre seu momento</h2></div><a class="text-link" href="#/produtos">Ver tudo <span>→</span></a></div><div class="category-grid">${categories.map(category => `<a class="category-card" href="#/categoria/${category.slug}"><div class="category-image"><img loading="lazy" src="${photo(category.image, 500)}" alt="${category.name}"></div><strong>${category.name}</strong><small>${category.sub}</small></a>`).join('')}</div></div></section>`;
}
function homePage() {
  const featured = allProducts().slice(0, 4);
  const best = [...allProducts()].sort((a, b) => b.reviews - a.reviews).slice(0, 4);
  return `<main><section class="hero"><div class="hero-copy"><span class="eyebrow">Nova estação · novos rituais</span><h1>Beleza no seu <em>próprio</em> ritmo.</h1><p>Fórmulas conscientes, texturas que acolhem e pequenos rituais para você se sentir bem na própria pele.</p><a class="button" href="#/produtos">Descobrir a coleção ${icon('arrow')}</a></div><div class="hero-image"><img src="${photo('photo-1608248543803-ba4f8c70ae0b', 1600)}" alt="Frascos de skincare botânico em um cenário natural"><span class="hero-caption">O essencial, com intenção.</span></div></section>${categorySection()}<section class="section-tight" style="background:#eeeee7"><div class="page-width"><div class="section-heading"><div><span class="eyebrow">Escolhas da casa</span><h2>Feitos para ficar</h2><p>Seus novos favoritos, escolhidos com cuidado.</p></div><a class="text-link" href="#/produtos">Ver coleção <span>→</span></a></div><div class="product-grid">${featured.map(productCard).join('')}</div></div></section><section class="section"><div class="page-width"><div class="section-heading"><div><span class="eyebrow">Queridinhos de vocês</span><h2>Os mais amados</h2></div><a class="text-link" href="#/produtos">Ver mais vendidos <span>→</span></a></div><div class="product-grid">${best.map(productCard).join('')}</div></div></section><section class="editorial-band"><div class="editorial-photo"><img loading="lazy" src="${photo('photo-1611930022073-b7a4ba5fcccd', 1200)}" alt="Ingredientes naturais para um ritual de cuidado"></div><div class="editorial-copy"><span class="eyebrow">Menos pressa, mais presença</span><h2>Seu cuidado também é um jeito de voltar.</h2><p>Uma rotina não precisa ser complicada para ser especial. Criamos fórmulas honestas, com ingredientes que fazem sentido e espaço para respirar.</p><a class="text-link" href="#/sobre">Conheça nossa essência <span>→</span></a></div></section><section class="section-tight"><div class="page-width benefit-row"><div class="benefit"><span class="benefit-icon">◇</span><div><strong>Compra segura</strong><small>Seus dados protegidos</small></div></div><div class="benefit"><span class="benefit-icon">↗</span><div><strong>Envio com cuidado</strong><small>Acompanhamento do pedido</small></div></div><div class="benefit"><span class="benefit-icon">✳</span><div><strong>Fórmulas conscientes</strong><small>Ingredientes selecionados</small></div></div><div class="benefit"><span class="benefit-icon">♡</span><div><strong>Estamos por perto</strong><small>Atendimento de verdade</small></div></div></div></section><section class="section-tight" style="padding-top:10px"><div class="page-width"><div class="section-heading"><div><span class="eyebrow">Notas de carinho</span><h2>O que dizem por aí</h2></div></div><div class="review-strip"><article class="review-quote"><div class="review-stars">★★★★★</div><blockquote>“O sérum virou meu momento favorito da manhã. Minha pele ficou mais luminosa sem pesar.”</blockquote><div class="review-person">Marina C. · Sérum Vital C + E</div></article><article class="review-quote"><div class="review-stars">★★★★★</div><blockquote>“Tudo chegou embalado com tanto cuidado. O cheiro do óleo facial é simplesmente maravilhoso.”</blockquote><div class="review-person">Luiza M. · Óleo Facial Noturno</div></article></div></div></section><section class="newsletter"><span class="eyebrow">Carta da Maison</span><h2>Um pouco de beleza na sua caixa de entrada.</h2><p>Novidades, rituais e uma surpresa na primeira compra.</p><form class="newsletter-form" data-form="newsletter"><label class="sr-only" for="newsletter-email">Seu e-mail</label><input id="newsletter-email" type="email" name="email" placeholder="Digite seu e-mail" required><button>Quero receber novidades →</button></form></section></main>`;
}
function catalogPage(path) {
  let heading = 'Todos os produtos', intro = 'Escolhas cuidadosas para acompanhar seus rituais.', list = allProducts();
  const categoryMatch = path.match(/^\/categoria\/([^/]+)/);
  const brandMatch = path.match(/^\/marca\/([^/]+)/);
  if (categoryMatch) { const found = categories.find(item => item.slug === categoryMatch[1]); heading = found?.name || categoryMatch[1]; intro = found?.sub || ''; list = heading === 'Lançamentos' ? list.filter(item => item.badge === 'Novo') : list.filter(item => item.category.toLowerCase() === heading.toLowerCase()); catalogFilters.category = heading; }
  else if (brandMatch) { const brand = decodeURIComponent(brandMatch[1]).replaceAll('-', ' '); heading = brand.split(' ').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' '); intro = `Conheça as fórmulas de ${heading}.`; list = list.filter(item => item.brand.toLowerCase() === heading.toLowerCase()); catalogFilters.brand = heading; }
  else { catalogFilters.category = ''; catalogFilters.brand = ''; }
  if (catalogFilters.category && !categoryMatch) list = list.filter(item => item.category === catalogFilters.category);
  if (catalogFilters.brand && !brandMatch) list = list.filter(item => item.brand === catalogFilters.brand);
  if (catalogFilters.onlySale) list = list.filter(item => item.oldPrice);
  if (catalogFilters.search) list = list.filter(item => `${item.name} ${item.brand} ${item.category}`.toLowerCase().includes(catalogFilters.search.toLowerCase()));
  if (catalogFilters.sort === 'price-asc') list.sort((a, b) => a.price - b.price);
  if (catalogFilters.sort === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (catalogFilters.sort === 'newest') list.sort((a, b) => (b.badge === 'Novo') - (a.badge === 'Novo'));
  return `${pageBanner(heading, intro)}<main class="page-width catalog-layout"><aside class="filters"><div class="filter-block"><h3>Categoria</h3><select data-filter="category"><option value="">Todas</option>${categories.map(c => `<option value="${c.name}" ${catalogFilters.category === c.name ? 'selected' : ''}>${c.name}</option>`).join('')}</select></div><div class="filter-block"><h3>Marca</h3><select data-filter="brand"><option value="">Todas</option>${[...new Set(allProducts().map(p => p.brand))].map(brand => `<option ${catalogFilters.brand === brand ? 'selected' : ''}>${escapeHTML(brand)}</option>`).join('')}</select></div><div class="filter-block"><h3>Seleção</h3><label class="filter-option"><input type="checkbox" data-filter="sale" ${catalogFilters.onlySale ? 'checked' : ''}> Em promoção</label></div><div class="filter-block"><h3>Faixa de preço</h3><div class="range-row"><input type="number" min="0" placeholder="R$ mín."><input type="number" min="0" placeholder="R$ máx."></div></div></aside><section><div class="catalog-topline"><span>${list.length} ${list.length === 1 ? 'produto' : 'produtos'}</span><label>Ordenar por <select data-filter="sort"><option value="featured" ${catalogFilters.sort === 'featured' ? 'selected' : ''}>Destaques</option><option value="newest" ${catalogFilters.sort === 'newest' ? 'selected' : ''}>Novidades</option><option value="price-asc" ${catalogFilters.sort === 'price-asc' ? 'selected' : ''}>Menor preço</option><option value="price-desc" ${catalogFilters.sort === 'price-desc' ? 'selected' : ''}>Maior preço</option></select></label></div>${list.length ? `<div class="product-grid catalog-grid">${list.map(productCard).join('')}</div>` : `<div class="empty-state">Não encontramos produtos com esses filtros. <a class="text-link" href="#/produtos">Limpar busca</a></div>`}</section></main>`;
}
function productPage(product) {
  if (!product) return notFoundPage();
  const reviewList = reviews[product.id] || [];
  return `${pageBanner('Ritual de cuidado', product.category, 'Produtos')}<main class="page-width"><section class="product-detail"><div class="detail-image"><img src="${getImage(product, 1200)}" alt="${escapeHTML(product.name)}"></div><div class="detail-copy"><div class="product-brand">${escapeHTML(product.brand)}</div><h1>${escapeHTML(product.name)}</h1><div class="product-rating">★ ★ ★ ★ ★ <span>${product.rating} · ${product.reviews + reviewList.length} avaliações</span></div><div class="detail-price">${money(product.price)} ${product.oldPrice ? `<span class="old-price">${money(product.oldPrice)}</span>` : ''}</div><small style="color:var(--muted)">ou 3x de ${money(product.price / 3)} sem juros</small><p>${escapeHTML(product.description)}</p><div class="detail-options"><div class="quantity-control"><button data-action="detail-qty" data-delta="-1" aria-label="Diminuir">−</button><span id="detail-qty">${detailQty}</span><button data-action="detail-qty" data-delta="1" aria-label="Aumentar">+</button></div><span style="font-size:10px;color:var(--muted)">${product.stock > 0 ? `${product.stock} unidades disponíveis` : 'Avise-me quando voltar'}</span></div><div class="detail-actions"><button class="button" data-action="add" data-id="${escapeHTML(product.id)}" data-qty="detail">Adicionar à sacola · ${money(product.price * detailQty)}</button><button class="favorite-button ${isFav(product.id) ? 'is-active' : ''}" style="position:static;width:46px;height:46px;border:1px solid var(--line)" data-action="favorite" data-id="${escapeHTML(product.id)}" aria-label="Favoritar">${icon('heart')}</button></div><div class="detail-notes"><span class="detail-note">Fórmula consciente</span><span class="detail-note">Envio cuidadoso</span><span class="detail-note">Compra segura</span></div></div></section><section class="section-tight"><div class="section-heading"><div><span class="eyebrow">Quem experimentou</span><h2>Uma pele, muitas histórias</h2></div></div><div class="review-strip"><article class="review-quote"><div class="review-stars">★★★★★</div><blockquote>“Textura deliciosa e resultado que aparece com consistência.”</blockquote><div class="review-person">Paula R. · Compra verificada</div></article>${reviewList.map(review => `<article class="review-quote"><div class="review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div><blockquote>“${escapeHTML(review.text)}”</blockquote><div class="review-person">${escapeHTML(review.name)} · Compra verificada</div></article>`).join('')}</div><form class="form-grid" data-form="review" style="margin-top:24px"><div class="field"><label for="review-name">Seu nome</label><input id="review-name" name="name" required></div><div class="field"><label for="review-rating">Sua nota</label><select id="review-rating" name="rating"><option value="5">5 estrelas</option><option value="4">4 estrelas</option><option value="3">3 estrelas</option></select></div><div class="field full"><label for="review-text">Conte sua experiência</label><textarea id="review-text" name="text" required></textarea></div><input type="hidden" name="productId" value="${escapeHTML(product.id)}"><div class="field full"><button class="button button-light" type="submit">Enviar avaliação</button></div></form></section></main>`;
}
const originalProductPage = productPage;
productPage = product => {
  let markup = originalProductPage(product);
  if (product?.priceBasis) {
    const priceLabel = product.priceBasis === 'box' ? 'Preço por caixa' : 'Preço por unidade';
    markup = markup.replace(/<small style="color:var\(--muted\)">ou 3x de .*? sem juros<\/small>/, `<small class="product-price-basis">${priceLabel}</small>`);
  }
  return product?.catalogDetails ? markup.replace('Avise-me quando voltar', 'Estoque não informado na tabela') : markup;
};
function cartLines() { return cart.map(line => ({ ...line, product: productById(line.id) })).filter(line => line.product); }
function cartPage() {
  const lines = cartLines();
  if (!lines.length) return `${pageBanner('Sua sacola', 'Um bom ritual começa com uma escolha.') }<main class="page-width section-tight"><div class="empty-state"><p>Sua sacola ainda está vazia.</p><a class="button" href="#/produtos">Explorar produtos</a></div></main>`;
  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.qty, 0), shipping = subtotal >= 249 ? 0 : 18.9;
  return `${pageBanner('Sua sacola', `${lines.reduce((sum, line) => sum + line.qty, 0)} itens selecionados`)}<main class="page-width cart-layout"><section>${lines.map(line => `<article class="cart-row"><a href="#/produto/${encodeURIComponent(line.product.slug)}"><img src="${getImage(line.product, 260)}" alt="${escapeHTML(line.product.name)}"></a><div><small>${escapeHTML(line.product.brand)}</small><h3><a href="#/produto/${encodeURIComponent(line.product.slug)}">${escapeHTML(line.product.name)}</a></h3><div class="quantity-control"><button data-action="cart-qty" data-id="${line.id}" data-delta="-1" aria-label="Diminuir">−</button><span>${line.qty}</span><button data-action="cart-qty" data-id="${line.id}" data-delta="1" aria-label="Aumentar">+</button></div></div><span class="cart-price">${money(line.product.price * line.qty)}</span><button class="remove-button" data-action="remove" data-id="${line.id}" aria-label="Remover">×</button></article>`).join('')}<a class="text-link" style="margin-top:20px" href="#/produtos">Continuar explorando →</a></section><aside class="summary-panel"><h2>Resumo da sacola</h2><div class="summary-line"><span>Subtotal</span><span>${money(subtotal)}</span></div><div class="summary-line"><span>Entrega</span><span>${shipping ? money(shipping) : 'Grátis'}</span></div>${subtotal < 249 ? `<div class="summary-line" style="color:var(--green)">Faltam ${money(249 - subtotal)} para o frete grátis</div>` : ''}<div class="summary-line summary-total"><span>Total</span><span>${money(subtotal + shipping)}</span></div><a class="button button-full" href="#/checkout">Ir para o checkout ${icon('arrow')}</a><small style="display:block;text-align:center;color:var(--muted);font-size:9px;margin-top:12px">Pagamento demonstrativo · ambiente local</small></aside></main>`;
}
function checkoutPage() {
  if (!cartLines().length) return `${pageBanner('Finalizar compra')}<main class="page-width section-tight"><div class="empty-state">Sua sacola está vazia. <a class="text-link" href="#/produtos">Escolher produtos →</a></div></main>`;
  const total = cartLines().reduce((sum, line) => sum + line.product.price * line.qty, 0), shipping = total >= 249 ? 0 : 18.9;
  return `${pageBanner('Finalizar compra', 'Quase lá. Seus dados ficam somente neste navegador.') }<main class="page-width checkout-layout"><form data-form="checkout"><section class="checkout-section"><h2>Seus dados</h2><div class="form-grid"><div class="field"><label>Nome completo</label><input name="name" required autocomplete="name"></div><div class="field"><label>E-mail</label><input type="email" name="email" required autocomplete="email"></div><div class="field"><label>CPF</label><input name="cpf" inputmode="numeric" placeholder="000.000.000-00" required></div><div class="field"><label>Telefone</label><input name="phone" type="tel" required></div></div></section><section class="checkout-section"><h2>Endereço de entrega</h2><div class="form-grid"><div class="field"><label>CEP</label><input name="cep" inputmode="numeric" required></div><div class="field"><label>Estado</label><input name="state" required></div><div class="field"><label>Rua</label><input name="street" required></div><div class="field"><label>Número</label><input name="number" required></div><div class="field"><label>Complemento</label><input name="complement"></div><div class="field"><label>Cidade</label><input name="city" required></div></div></section><section class="checkout-section"><h2>Pagamento</h2><div class="field"><label>Método de pagamento</label><select name="payment"><option>Pix demonstrativo</option><option>Cartão de crédito (simulação)</option></select></div></section><button class="button button-clay" type="submit">Confirmar pedido · ${money(total + shipping)}</button><p style="font-size:9px;color:var(--muted)">Esta demonstração não cobra pagamentos nem envia seus dados.</p></form><aside class="summary-panel"><h2>Seu pedido</h2>${cartLines().map(line => `<div class="summary-line"><span>${line.qty} × ${escapeHTML(line.product.name)}</span><span>${money(line.product.price * line.qty)}</span></div>`).join('')}<div class="summary-line"><span>Entrega</span><span>${shipping ? money(shipping) : 'Grátis'}</span></div><div class="summary-line summary-total"><span>Total</span><span>${money(total + shipping)}</span></div></aside></main>`;
}
function authPage(register = false) {
  return `<main class="auth-wrap"><span class="eyebrow">Maison Botanique</span><h1>${register ? 'Sua beleza, do seu jeito.' : 'Que bom ter você por aqui.'}</h1><p>${register ? 'Crie sua conta para acompanhar seus rituais.' : 'Acesse sua conta e acompanhe seus pedidos.'}</p><form data-form="${register ? 'register' : 'login'}">${register ? `<div class="field"><label>Nome completo</label><input name="name" required autocomplete="name"></div>` : ''}<div class="field"><label>E-mail</label><input type="email" name="email" required autocomplete="email"></div><div class="field"><label>Senha</label><input type="password" name="password" required minlength="4" autocomplete="${register ? 'new-password' : 'current-password'}"></div>${register ? `<label class="filter-option"><input type="checkbox" required> Quero receber novidades e rituais por e-mail</label>` : `<div style="text-align:right;font-size:10px;color:var(--muted);margin:-3px 0 13px">Acesso de demonstração</div>`}<button class="button button-full" type="submit">${register ? 'Criar minha conta' : 'Entrar'}</button></form><div class="auth-foot">${register ? 'Já tem conta?' : 'Ainda não tem conta?'} <a href="#/${register ? 'login' : 'cadastro'}">${register ? 'Entrar' : 'Criar conta'}</a></div></main>`;
}
function accountPage(path) {
  const nav = [['/minha-conta','Minha conta'],['/meus-pedidos','Meus pedidos'],['/favoritos','Favoritos']];
  const user = read('user', { name: 'Cliente Maison', email: 'cliente@email.com' });
  return `${pageBanner('Minha Maison', `Olá, ${user.name || 'Cliente'}. Este é seu espaço.`)}<main class="page-width account-layout"><nav class="account-menu">${nav.map(([href,label]) => `<a href="#${href}" class="${path === href ? 'active' : ''}">${label}</a>`).join('')}<a href="#/" data-action="logout">Sair da conta</a></nav><section class="account-content">${path === '/meus-pedidos' ? ordersPage() : path === '/favoritos' ? favoritesPage(true) : `<h2>Seus dados</h2><form class="form-grid" data-form="profile"><div class="field"><label>Nome</label><input name="name" value="${escapeHTML(user.name)}" required></div><div class="field"><label>E-mail</label><input type="email" name="email" value="${escapeHTML(user.email)}" required></div><div class="field"><label>Telefone</label><input name="phone" value="${escapeHTML(user.phone || '')}"></div><div class="field"><label>CPF</label><input name="cpf" value="${escapeHTML(user.cpf || '')}"></div><div class="field full"><button class="button button-small" type="submit">Salvar meus dados</button></div></form><div style="margin-top:30px;padding-top:20px;border-top:1px solid var(--line)"><span class="eyebrow">Seu próximo ritual</span><p style="font:500 18px var(--font-display)">Explore os itens que combinam com você.</p><a class="text-link" href="#/produtos">Ver coleção →</a></div>`}</section></main>`;
}
function ordersPage() {
  if (!orders.length) return '<h2>Meus pedidos</h2><div class="empty-state">Seus próximos rituais aparecerão aqui.</div>';
  return `<h2>Meus pedidos</h2><div class="table-wrap"><table class="data-table"><thead><tr><th>Pedido</th><th>Data</th><th>Status</th><th>Total</th><th></th></tr></thead><tbody>${orders.map(order => `<tr><td>${escapeHTML(order.id)}</td><td>${new Date(`${order.date}T12:00:00`).toLocaleDateString('pt-BR')}</td><td><span class="status ${order.status === 'Pendente' ? 'pending' : ''}">${escapeHTML(order.status)}</span></td><td>${money(order.total)}</td><td><a class="text-link" href="#/pedido/${encodeURIComponent(order.id)}">Ver →</a></td></tr>`).join('')}</tbody></table></div>`;
}
function favoritesPage(embedded = false) {
  const list = favorites.map(productById).filter(Boolean);
  return `${embedded ? '' : pageBanner('Seus favoritos', 'Uma lista feita por você.') }<main class="page-width ${embedded ? '' : 'section-tight'}">${embedded ? '' : '<div class="section-heading"><div><span class="eyebrow">Salvos com carinho</span><h2>Seus favoritos</h2></div></div>'}${list.length ? `<div class="product-grid">${list.map(productCard).join('')}</div>` : `<div class="empty-state">Você ainda não salvou nenhum produto.<br><a class="text-link" href="#/produtos">Descobrir favoritos →</a></div>`}</main>`;
}
function orderPage(id) {
  const order = orders.find(item => item.id === id);
  if (!order) return `${pageBanner('Pedido não encontrado')}<main class="page-width section-tight"><div class="empty-state"><a href="#/meus-pedidos">Voltar para meus pedidos</a></div></main>`;
  return `${pageBanner(`Pedido ${order.id}`, 'Obrigado por escolher a Maison Botanique.')}<main class="page-width section-tight"><div class="account-content"><span class="status ${order.status === 'Pendente' ? 'pending' : ''}">${escapeHTML(order.status)}</span><h2 style="margin-top:20px">Seu ritual está a caminho.</h2><p style="color:var(--muted);font-size:12px">Pedido em ${new Date(`${order.date}T12:00:00`).toLocaleDateString('pt-BR')} · Total ${money(order.total)}</p>${order.items.map(line => { const p = productById(line.id); return p ? `<div class="cart-row"><img src="${getImage(p,220)}" alt=""><div><small>${line.qty} unidade(s)</small><h3>${escapeHTML(p.name)}</h3></div><span class="cart-price">${money(p.price * line.qty)}</span></div>` : ''; }).join('')}<a class="text-link" style="margin-top:22px" href="#/produtos">Continuar explorando →</a></div></main>`;
}
function contentPage(path) {
  const contents = {
    '/sobre': ['Nossa essência', 'A beleza pode ser simples. Acreditamos em fórmulas cuidadosas, escolhas conscientes e rituais possíveis para a vida real.', 'Criamos a Maison para aproximar o cuidado daquilo que importa: sentir-se bem na própria pele, no próprio tempo. Cada produto é escolhido por sua qualidade, origem e sensorialidade.'],
    '/contato': ['Estamos por perto', 'Uma dúvida, uma ideia ou só vontade de conversar? Escreva para a gente.', 'Nosso time atende de segunda a sexta, das 9h às 18h. Respondemos em até um dia útil.'],
    '/politica-privacidade': ['Política de privacidade', 'Cuidar também é respeitar seus dados.', 'Nesta demonstração, os dados digitados ficam somente no armazenamento local do navegador. Nenhum dado é enviado a servidores. Em uma loja publicada, esta política deve ser revisada para refletir os serviços, prazos e direitos aplicáveis.'],
    '/termos': ['Termos de uso', 'Informações importantes sobre esta experiência.', 'Este projeto é uma demonstração de interface. Não há venda efetiva, disponibilidade garantida, cobrança, emissão fiscal ou integração com transportadoras. Preços e pedidos apresentados são ilustrativos.']
  };
  const [title, subtitle, text] = contents[path] || contents['/sobre'];
  const contact = path === '/contato';
  return `${pageBanner(title, subtitle)}<main class="page-width section-tight"><div style="max-width:720px"><p style="font:500 22px/1.55 var(--font-display);color:var(--green)">${escapeHTML(text)}</p>${contact ? `<form class="form-grid" data-form="contact" style="margin-top:28px"><div class="field"><label>Seu nome</label><input name="name" required></div><div class="field"><label>E-mail</label><input type="email" name="email" required></div><div class="field full"><label>Mensagem</label><textarea name="message" required></textarea></div><div class="field full"><button class="button" type="submit">Enviar mensagem</button></div></form>` : ''}</div></main>`;
}
function notFoundPage() { return `${pageBanner('Esta página não existe')}<main class="page-width section-tight"><div class="empty-state"><a class="button" href="#/">Voltar ao início</a></div></main>`; }
function adminNav(path) {
  const items = [['/admin','Visão geral','⌂'],['/admin/produtos','Produtos','◇'],['/admin/catalogo','Categorias e marcas','▤'],['/admin/pedidos','Pedidos','▣'],['/admin/estoque','Estoque','◫'],['/admin/clientes','Clientes','♙'],['/admin/financeiro','Financeiro','↗'],['/admin/banners','Banners','▧'],['/admin/configuracoes','Configurações','⚙']];
  return `<aside class="admin-sidebar"><span class="admin-sidebar-label">Loja</span>${items.map(([href,label,mark]) => `<a href="#${href}" class="${path === href ? 'active' : ''}"><span>${mark}</span>${label}</a>`).join('')}<a href="#/" class="back-store">←　Voltar à loja</a></aside>`;
}
function adminShell(path, body) {
  return `<div class="admin-shell"><header class="admin-header"><a href="#/admin" class="brand"><span class="brand-mark">M</span><span class="brand-word">MAISON BOTANIQUE<small>PAINEL DA LOJA</small></span></a><div class="admin-head-right"><span>Ambiente de demonstração</span><a href="#/" class="text-link">Ver loja ↗</a></div></header><div class="admin-layout">${adminNav(path)}<main class="admin-main animate-in">${body}</main></div></div>`;
}
function adminTitle(title, subtitle, action = '') { return `<div class="admin-page-title"><div><h1>${title}</h1><p>${subtitle}</p></div>${action}</div>`; }
function adminDashboard() {
  const revenue = orders.reduce((sum, order) => sum + order.total, 0), orderCount = orders.length;
  const months = [['Abr',38],['Mai',52],['Jun',46],['Jul',65],['Ago',72],['Set',89]];
  return `${adminTitle('Visão geral', 'Acompanhe o que está acontecendo na sua loja.', '<a class="button button-small" href="#/admin/pedidos">Ver pedidos →</a>')}<div class="admin-kpis"><article class="kpi"><small>Receita demonstrativa</small><strong>${money(revenue)}</strong><em>↗ Valores de exemplo</em></article><article class="kpi"><small>Pedidos</small><strong>${orderCount}</strong><em>Últimos pedidos registrados</em></article><article class="kpi"><small>Produtos ativos</small><strong>${allProducts().length}</strong><em>${allProducts().filter(p => p.stock < 10).length} com estoque baixo</em></article><article class="kpi"><small>Ticket médio</small><strong>${money(orderCount ? revenue / orderCount : 0)}</strong><em>Baseado nos pedidos locais</em></article></div><div class="admin-two-col"><section class="admin-panel"><div class="admin-panel-head"><h2>Receita ao longo do tempo</h2><span style="font-size:9px;color:var(--muted)">Últimos 6 meses · demonstração</span></div><div class="chart">${months.map(([label,value]) => `<div class="chart-column"><div class="chart-bar" style="height:${value}%"></div><small>${label}</small></div>`).join('')}</div></section><section class="admin-panel"><div class="admin-panel-head"><h2>Pedidos recentes</h2><a href="#/admin/pedidos">Ver todos →</a></div>${orders.slice(0,4).map(order => `<div class="summary-line" style="border-bottom:1px solid var(--line);padding-bottom:11px"><span><strong style="color:var(--ink)">${escapeHTML(order.customer)}</strong><br><small>${escapeHTML(order.id)}</small></span><span>${money(order.total)}<br><span class="status ${order.status === 'Pendente' ? 'pending' : ''}">${escapeHTML(order.status)}</span></span></div>`).join('')}</section></div><section class="admin-panel"><div class="admin-panel-head"><h2>Produtos com estoque baixo</h2><a href="#/admin/estoque">Gerenciar estoque →</a></div>${allProducts().filter(p => p.stock < 12).slice(0,4).map(p => `<div class="summary-line"><span>${escapeHTML(p.name)}</span><strong style="color:${p.stock < 8 ? 'var(--clay)' : 'var(--ink)'}">${p.stock} unidades</strong></div>`).join('') || '<p style="color:var(--muted);font-size:11px">Todos os produtos estão com estoque adequado.</p>'}</section>`;
}
function adminProducts() {
  return `${adminTitle('Produtos', 'Gerencie seu catálogo, preços e disponibilidade.', '<button class="button button-small" data-action="new-product">＋ Novo produto</button>')}<section class="admin-panel"><div class="admin-toolbar"><input class="admin-search" data-admin-search placeholder="Buscar produto..."><select data-admin-filter="category"><option value="">Todas as categorias</option>${categories.map(c => `<option>${c.name}</option>`).join('')}</select></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Produto</th><th>Categoria</th><th>Preço</th><th>Estoque</th><th>Status</th><th></th></tr></thead><tbody>${allProducts().map(p => `<tr data-product-row data-name="${escapeHTML(`${p.name} ${p.brand} ${p.category}`.toLowerCase())}" data-category="${escapeHTML(p.category)}"><td><div class="admin-product-name"><img src="${getImage(p,100)}" alt=""><span>${escapeHTML(p.name)}<br><small style="color:var(--muted)">${escapeHTML(p.brand)}</small></span></div></td><td>${escapeHTML(p.category)}</td><td>${money(p.price)}</td><td>${p.stock}</td><td><span class="status">Ativo</span></td><td><button class="text-link" data-action="edit-product" data-id="${escapeHTML(p.id)}">Editar</button></td></tr>`).join('')}</tbody></table></div></section>`;
}
function adminCatalog() {
  const brands = [...new Set([...allProducts().map(product => product.brand), ...customBrands])];
  return `${adminTitle('Categorias e marcas', 'Organize as coleções e marcas disponíveis na loja.', '<div class="admin-actions"><button class="button button-light button-small" data-action="new-category">＋ Categoria</button><button class="button button-small" data-action="new-brand">＋ Marca</button></div>')}<div class="admin-two-col"><section class="admin-panel"><div class="admin-panel-head"><h2>Categorias</h2><span>${categories.length}</span></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Categoria</th><th>Endereço</th><th></th></tr></thead><tbody>${categories.map((category,index) => `<tr><td>${escapeHTML(category.name)}</td><td>/categoria/${escapeHTML(category.slug)}</td><td><button class="text-link" data-action="remove-taxonomy" data-kind="category" data-index="${index}">Remover</button></td></tr>`).join('')}</tbody></table></div></section><section class="admin-panel"><div class="admin-panel-head"><h2>Marcas</h2><span>${brands.length}</span></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Marca</th><th>Produtos</th><th></th></tr></thead><tbody>${brands.map((brand,index) => `<tr><td>${escapeHTML(brand)}</td><td>${allProducts().filter(product => product.brand === brand).length}</td><td>${customBrands.includes(brand) ? `<button class="text-link" data-action="remove-taxonomy" data-kind="brand" data-index="${customBrands.indexOf(brand)}">Remover</button>` : 'Catálogo'}</td></tr>`).join('')}</tbody></table></div></section></div>`;
}
function adminOrders() {
  return `${adminTitle('Pedidos', 'Acompanhe os pedidos e atualize o andamento.', '<button class="button button-light button-small" data-action="export-orders">Exportar CSV ↓</button>')}<section class="admin-panel"><div class="admin-toolbar"><input class="admin-search" data-admin-search placeholder="Buscar pedido ou cliente..."><span style="font-size:10px;color:var(--muted)">${orders.length} pedidos</span></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Pedido</th><th>Cliente</th><th>Data</th><th>Total</th><th>Status</th></tr></thead><tbody>${orders.map(order => `<tr><td><a href="#/pedido/${encodeURIComponent(order.id)}" class="text-link">${escapeHTML(order.id)}</a></td><td>${escapeHTML(order.customer)}<br><small style="color:var(--muted)">${escapeHTML(order.email)}</small></td><td>${new Date(`${order.date}T12:00:00`).toLocaleDateString('pt-BR')}</td><td>${money(order.total)}</td><td><select data-order-status="${escapeHTML(order.id)}">${['Pendente','Processando','Enviado','Entregue','Cancelado'].map(status => `<option ${order.status === status ? 'selected' : ''}>${status}</option>`).join('')}</select></td></tr>`).join('')}</tbody></table></div></section>`;
}
function adminInventory() {
  return `${adminTitle('Estoque', 'Evite rupturas e acompanhe a disponibilidade.', '<button class="button button-light button-small" data-action="export-stock">Exportar estoque ↓</button>')}<section class="admin-panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Produto</th><th>Disponível</th><th>Nível</th><th>Ajustar quantidade</th></tr></thead><tbody>${allProducts().map(p => `<tr><td>${escapeHTML(p.name)}</td><td><strong style="color:${p.stock < 8 ? 'var(--clay)' : 'var(--ink)'}">${p.stock}</strong></td><td><span class="mini-bar"><i style="width:${Math.min(100,p.stock*4)}%"></i></span>${p.stock < 8 ? 'Baixo' : p.stock < 15 ? 'Atenção' : 'Saudável'}</td><td><button class="button button-light button-small" data-action="stock-adjust" data-id="${escapeHTML(p.id)}" data-delta="-1">−</button> <button class="button button-light button-small" data-action="stock-adjust" data-id="${escapeHTML(p.id)}" data-delta="1">+</button></td></tr>`).join('')}</tbody></table></div></section>`;
}
function adminCustomers() {
  const customers = [...new Map(orders.map(order => [order.email, order])).values()];
  return `${adminTitle('Clientes', 'Uma visão dos clientes com pedidos registrados.')}<section class="admin-panel"><div class="admin-toolbar"><input class="admin-search" data-admin-search placeholder="Buscar cliente..."><span style="font-size:10px;color:var(--muted)">${customers.length} clientes demonstrativos</span></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Cliente</th><th>E-mail</th><th>Pedidos</th><th>Última compra</th><th>Total</th></tr></thead><tbody>${customers.map(customer => { const customerOrders = orders.filter(o => o.email === customer.email); return `<tr><td>${escapeHTML(customer.customer)}</td><td>${escapeHTML(customer.email)}</td><td>${customerOrders.length}</td><td>${new Date(`${customer.date}T12:00:00`).toLocaleDateString('pt-BR')}</td><td>${money(customerOrders.reduce((sum,o)=>sum+o.total,0))}</td></tr>`; }).join('')}</tbody></table></div></section>`;
}
function adminFinance() {
  const income = orders.reduce((sum, order) => sum + order.total, 0), totalExpenses = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
  return `${adminTitle('Financeiro', 'Receitas e despesas locais, para acompanhamento demonstrativo.', '<button class="button button-small" data-action="new-expense">＋ Registrar despesa</button>')}<div class="admin-kpis"><article class="kpi"><small>Receita bruta demonstrativa</small><strong>${money(income)}</strong><em>Derivada dos pedidos locais</em></article><article class="kpi"><small>Despesas registradas</small><strong>${money(totalExpenses)}</strong><em>${expenses.length} lançamento(s)</em></article><article class="kpi"><small>Resultado estimado</small><strong>${money(income - totalExpenses)}</strong><em>Não representa contabilidade</em></article><article class="kpi"><small>Pedidos contabilizados</small><strong>${orders.length}</strong><em>Dados de demonstração</em></article></div><section class="admin-panel"><div class="admin-panel-head"><h2>Lançamentos</h2><button class="text-link" data-action="export-finance">Exportar CSV ↓</button></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Data</th><th>Descrição</th><th>Categoria</th><th>Tipo</th><th>Valor</th></tr></thead><tbody>${orders.map(order => `<tr><td>${new Date(`${order.date}T12:00:00`).toLocaleDateString('pt-BR')}</td><td>Pedido ${escapeHTML(order.id)}</td><td>Vendas</td><td><span class="status">Receita</span></td><td>${money(order.total)}</td></tr>`).join('')}${expenses.map(expense => `<tr><td>${new Date(`${expense.date}T12:00:00`).toLocaleDateString('pt-BR')}</td><td>${escapeHTML(expense.description)}</td><td>${escapeHTML(expense.category)}</td><td><span class="status cancelled">Despesa</span></td><td>− ${money(expense.amount)}</td></tr>`).join('')}</tbody></table></div></section>`;
}
function adminBanners() {
  const currentBanners = banners.length ? banners : [{ title: 'Beleza que combina com você', subtitle: 'Descubra nossa nova coleção de cosméticos.', status: 'Ativo', date: 'Permanente' }];
  return `${adminTitle('Banners', 'Atualize as campanhas que aparecem na página inicial.', '<button class="button button-small" data-action="new-banner">＋ Novo banner</button>')}<section class="admin-panel">${currentBanners.map((banner, index) => `<article class="banner-preview" style="margin-bottom:13px"><img src="${banner.image?.startsWith('https://') ? escapeHTML(banner.image) : photo('photo-1608248543803-ba4f8c70ae0b',500)}" alt="Prévia da campanha"><div><span class="status ${banner.status === 'Inativo' ? 'cancelled' : ''}">${escapeHTML(banner.status || 'Ativo')}</span><strong style="display:block;margin-top:10px">${escapeHTML(banner.title)}</strong><small>${escapeHTML(banner.subtitle)} · ${escapeHTML(banner.date || 'Permanente')}</small><button class="text-link" style="margin-top:11px" data-action="remove-banner" data-index="${index}">Remover</button></div></article>`).join('')}</section>`;
}
function adminSettings() {
  return `${adminTitle('Identidade da loja', 'Personalize cores e assinatura visual da Maison.') }<form data-form="settings"><section class="admin-panel"><div class="admin-panel-head"><h2>Paleta de cores</h2><span style="font-size:9px;color:var(--muted)">As alterações afetam esta prévia local.</span></div><div class="settings-grid">${[['primary','Cor principal'],['secondary','Cor secundária'],['button','Cor dos botões'],['background','Cor de fundo']].map(([key,label]) => `<label class="settings-tile"><div class="color-row"><input type="color" name="${key}" value="${escapeHTML(settings[key])}"><span>${label}</span><code>${escapeHTML(settings[key])}</code></div></label>`).join('')}</div></section><section class="admin-panel"><div class="settings-grid"><div class="field"><label>Nome da marca</label><input name="logo" value="${escapeHTML(settings.logo)}"></div><div class="field"><label>Tipografia de títulos</label><select name="font"><option ${settings.font === 'Manrope' ? 'selected' : ''}>Manrope</option><option ${settings.font === 'Georgia' ? 'selected' : ''}>Georgia</option></select></div><div class="field full"><label>Favicon (URL)</label><input name="favicon" value="${escapeHTML(settings.favicon || 'favicon.svg')}" placeholder="favicon.svg ou URL"></div></div></section><button class="button" type="submit">Salvar identidade visual</button></form>`;
}
function renderAdmin(path) {
  const pages = { '/admin': adminDashboard, '/admin/produtos': adminProducts, '/admin/catalogo': adminCatalog, '/admin/pedidos': adminOrders, '/admin/estoque': adminInventory, '/admin/clientes': adminCustomers, '/admin/financeiro': adminFinance, '/admin/banners': adminBanners, '/admin/configuracoes': adminSettings };
  return adminShell(path, (pages[path] || adminDashboard)());
}
function render() {
  const path = route();
  document.title = `${path === '/' ? 'Beleza em seu próprio ritmo' : path.split('/').pop().replaceAll('-', ' ')} | ${settings.logo}`;
  document.documentElement.style.setProperty('--green', settings.primary);
  document.documentElement.style.setProperty('--green-dark', settings.primary);
  document.documentElement.style.setProperty('--button', settings.button);
  document.documentElement.style.setProperty('--lime', settings.secondary);
  document.documentElement.style.setProperty('--paper', settings.background);
  document.documentElement.style.setProperty('--font-display', settings.font === 'Georgia' ? 'Georgia,serif' : "'Manrope',Georgia,serif");
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon && settings.favicon) favicon.href = settings.favicon;
  if (path.startsWith('/admin')) { document.querySelector('#app').innerHTML = renderAdmin(path); return; }
  let page;
  if (path === '/') page = homePage();
  else if (path === '/produtos' || path.startsWith('/categoria/') || path.startsWith('/marca/')) page = catalogPage(path);
  else if (path.startsWith('/produto/')) page = productPage(findProduct(path.split('/')[2]));
  else if (path === '/carrinho') page = cartPage();
  else if (path === '/checkout') page = checkoutPage();
  else if (path === '/login') page = authPage(false);
  else if (path === '/cadastro') page = authPage(true);
  else if (path === '/minha-conta' || path === '/meus-pedidos') page = accountPage(path);
  else if (path === '/favoritos') page = favoritesPage();
  else if (path.startsWith('/pedido/')) page = orderPage(path.split('/')[2]);
  else if (['/sobre','/contato','/politica-privacidade','/termos'].includes(path)) page = contentPage(path);
  else page = notFoundPage();
  document.querySelector('#app').innerHTML = `<div class="site-shell">${header()}${page}${footer()}</div>`;
  if (path === '/') {
    const now = new Date();
    const activeBanner = banners.find(banner => banner.status === 'Ativo' && (!banner.start || new Date(`${banner.start}T00:00:00`) <= now) && (!banner.end || new Date(`${banner.end}T23:59:59`) >= now));
    if (activeBanner) {
      const title = document.querySelector('.hero-copy h1');
      const subtitle = document.querySelector('.hero-copy p');
      const link = document.querySelector('.hero-copy .button');
      const heroImage = document.querySelector('.hero-image img');
      if (title) title.textContent = activeBanner.title;
      if (subtitle) subtitle.textContent = activeBanner.subtitle;
      if (link) { link.href = `#${activeBanner.link || '/produtos'}`; link.replaceChildren(document.createTextNode(activeBanner.button || 'Comprar agora '), Object.assign(document.createElement('span'), { textContent: '→' })); }
      if (heroImage && activeBanner.image?.startsWith('https://')) heroImage.src = activeBanner.image;
    }
  }
  if (searchOpen) document.querySelector('#header-search')?.focus();
}
function saveCart() { write('cart', cart); }
function addToCart(id, qty = 1) {
  const product = productById(id);
  if (!product) return;
  const line = cart.find(item => item.id === id);
  if (product.stock < 1) { toast('Produto indisponível no momento'); return; }
  if (line) line.qty = Math.min(product.stock, line.qty + qty); else cart.push({ id, qty: Math.min(product.stock, qty) });
  saveCart(); render(); toast(`${product.name} adicionado à sacola`);
}
function toggleFavorite(id) {
  favorites = isFav(id) ? favorites.filter(item => item !== id) : [...favorites, id];
  write('favorites', favorites); render(); toast(isFav(id) ? 'Adicionado aos favoritos' : 'Removido dos favoritos');
}
function downloadCSV(filename, rows) {
  const csv = rows.map(row => row.map(value => `"${String(value ?? '').replaceAll('"','""')}"`).join(';')).join('\n');
  const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' })); link.download = filename; link.click(); URL.revokeObjectURL(link.href);
}
function openModal(type, id = '') {
  const existing = document.querySelector('.modal-backdrop'); existing?.remove();
  let title = 'Novo produto', form;
  if (type === 'product') {
    const product = id ? productById(id) : {};
    title = id ? 'Editar produto' : 'Novo produto';
      form = `<form data-form="product" data-id="${escapeHTML(id)}"><div class="form-grid"><div class="field full"><label>Nome do produto</label><input name="name" value="${escapeHTML(product?.name || '')}" required></div><div class="field"><label>Marca</label><input name="brand" value="${escapeHTML(product?.brand || 'Maison Botanique')}" required></div><div class="field"><label>Categoria</label><select name="category">${categories.map(c => `<option ${product?.category === c.name ? 'selected' : ''}>${escapeHTML(c.name)}</option>`).join('')}</select></div><div class="field"><label>Preço (R$)</label><input name="price" type="number" min="1" step="0.01" value="${product?.price || ''}" required></div><div class="field"><label>Estoque</label><input name="stock" type="number" min="0" value="${product?.stock ?? 0}" required></div><div class="field full"><label>URL da imagem</label><input type="url" name="image" value="${product?.image?.startsWith('https://') ? escapeHTML(product.image) : ''}" placeholder="https://..."></div><div class="field full"><label for="product-image-file">Imagem deste dispositivo</label><input id="product-image-file" type="file" name="imageFile" accept="image/jpeg,image/png,image/webp,image/avif"><small>JPG, PNG, WebP ou AVIF · máximo de 12 MB. A imagem é comprimida e salva neste navegador.</small><div class="local-image-preview" data-image-preview>${product?.image ? `<img src="${getImage(product)}" alt="Prévia da imagem do produto"><span>Imagem atual</span>` : ''}</div></div><div class="field full"><label>Descrição</label><textarea name="description">${escapeHTML(product?.description || '')}</textarea></div></div><button class="button" style="margin-top:17px" type="submit">Salvar produto</button></form>`;
      form = form.replace('</div><div class="field"><label>Estoque</label>', `</div><div class="field"><label>Preço por</label><select name="priceBasis"><option value="unit" ${product?.priceBasis !== 'box' ? 'selected' : ''}>Unidade</option><option value="box" ${product?.priceBasis === 'box' ? 'selected' : ''}>Caixa</option></select></div><div class="field"><label>Estoque</label>`);
    } else if (type === 'taxonomy') {
    title = id === 'category' ? 'Nova categoria' : 'Nova marca';
    form = `<form data-form="taxonomy" data-kind="${id}"><div class="field"><label>${id === 'category' ? 'Nome da categoria' : 'Nome da marca'}</label><input name="name" required></div><button class="button" style="margin-top:17px" type="submit">Salvar</button></form>`;
  } else if (type === 'expense') {
    title = 'Registrar despesa'; form = `<form data-form="expense"><div class="field"><label>Descrição</label><input name="description" required></div><div class="field" style="margin-top:12px"><label>Categoria</label><select name="category"><option>Operação</option><option>Marketing</option><option>Embalagens</option><option>Outros</option></select></div><div class="field" style="margin-top:12px"><label>Valor (R$)</label><input name="amount" type="number" min="0.01" step="0.01" required></div><button class="button" style="margin-top:17px" type="submit">Registrar despesa</button></form>`;
  } else {
    title = 'Novo banner'; form = `<form data-form="banner"><div class="field"><label>Título</label><input name="title" required></div><div class="field" style="margin-top:12px"><label>Subtítulo</label><input name="subtitle" required></div><div class="field" style="margin-top:12px"><label>Imagem (URL)</label><input name="image" type="url" placeholder="https://..."></div><div class="field" style="margin-top:12px"><label>Texto do botão</label><input name="button" value="Comprar agora"></div><div class="field" style="margin-top:12px"><label>Link</label><input name="link" value="/produtos"></div><div class="form-grid" style="margin-top:12px"><div class="field"><label>Início</label><input name="start" type="date"></div><div class="field"><label>Término</label><input name="end" type="date"></div></div><div class="field" style="margin-top:12px"><label>Status</label><select name="status"><option>Ativo</option><option>Inativo</option></select></div><button class="button" style="margin-top:17px" type="submit">Salvar banner</button></form>`;
  }
  document.body.insertAdjacentHTML('beforeend', `<div class="modal-backdrop" data-action="close-modal"><section class="admin-panel modal-card" role="dialog" aria-modal="true" aria-label="${title}"><div class="admin-panel-head"><h2>${title}</h2><button class="icon-button" data-action="close-modal" aria-label="Fechar">×</button></div>${form}</section></div>`);
}
function formObject(form) { return Object.fromEntries(new FormData(form).entries()); }
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#/"]');
  if (link) { document.querySelector('#main-nav')?.classList.remove('is-open'); searchOpen = false; }
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const { action, id } = button.dataset;
  if (action === 'menu') document.querySelector('#main-nav')?.classList.toggle('is-open');
  if (action === 'search') { const form = document.querySelector('.search-form'); form?.classList.toggle('is-open'); searchOpen = form?.classList.contains('is-open') || false; if (searchOpen) document.querySelector('#header-search')?.focus(); }
  if (action === 'favorite') toggleFavorite(id);
  if (action === 'add') addToCart(id, button.dataset.qty === 'detail' ? detailQty : 1);
  if (action === 'detail-qty') { detailQty = Math.max(1, detailQty + Number(button.dataset.delta)); render(); }
  if (action === 'cart-qty') { const line = cart.find(item => item.id === id), product = productById(id); if (line && product) line.qty = Math.min(product.stock, Math.max(1, line.qty + Number(button.dataset.delta))); saveCart(); render(); }
  if (action === 'remove') { cart = cart.filter(line => line.id !== id); saveCart(); render(); }
  if (action === 'logout') { write('user', null); toast('Você saiu da sua conta'); }
  if (action === 'new-product') openModal('product');
  if (action === 'edit-product') openModal('product', id);
  if (action === 'new-category') openModal('taxonomy', 'category');
  if (action === 'new-brand') openModal('taxonomy', 'brand');
  if (action === 'new-expense') openModal('expense');
  if (action === 'new-banner') openModal('banner');
  if (action === 'close-modal' && event.target === button) document.querySelector('.modal-backdrop')?.remove();
  if (action === 'remove-banner') { banners.splice(Number(button.dataset.index), 1); write('banners', banners); render(); toast('Banner removido'); }
  if (action === 'remove-taxonomy') { const list = button.dataset.kind === 'category' ? categories : customBrands; list.splice(Number(button.dataset.index), 1); write(button.dataset.kind === 'category' ? 'categories' : 'brands', list); render(); toast('Item removido do catálogo'); }
  if (action === 'stock-adjust') { const p = productById(id); if (p) { p.stock = Math.max(0, p.stock + Number(button.dataset.delta)); saveProducts(); render(); } }
  if (action === 'export-orders') downloadCSV('pedidos-maison.csv', [['Pedido','Cliente','E-mail','Data','Status','Total'], ...orders.map(o => [o.id,o.customer,o.email,o.date,o.status,o.total])]);
  if (action === 'export-stock') downloadCSV('estoque-maison.csv', [['Produto','Categoria','Estoque'], ...allProducts().map(p => [p.name,p.category,p.stock])]);
  if (action === 'export-finance') downloadCSV('financeiro-maison.csv', [['Data','Descrição','Tipo','Valor'], ...orders.map(o => [o.date,o.id,'Receita',o.total]), ...expenses.map(e => [e.date,e.description,'Despesa',-e.amount])]);
});
function saveProducts() { customProducts = customProducts.map(saved => { const live = products.find(p => p.id === saved.id); return live ? { ...saved, stock: live.stock } : saved; }); products.forEach(product => writeProductStock(product)); write('products', customProducts); }
function writeProductStock(product) { const stocks = read('stock', {}); stocks[product.id] = product.stock; write('stock', stocks); }
const savedStock = read('stock', {}); products.forEach(product => { if (Number.isFinite(savedStock[product.id])) product.stock = savedStock[product.id]; });
document.addEventListener('change', event => {
  const filter = event.target.dataset.filter;
  if (filter === 'category') { catalogFilters.category = event.target.value; if (catalogFilters.category) go(`/categoria/${categories.find(c=>c.name===catalogFilters.category)?.slug || ''}`); else { catalogFilters.category = ''; render(); } }
  if (filter === 'brand') { catalogFilters.brand = event.target.value; if (catalogFilters.brand) go(`/marca/${encodeURIComponent(catalogFilters.brand.toLowerCase().replaceAll(' ','-'))}`); else { catalogFilters.brand = ''; render(); } }
  if (filter === 'sale') { catalogFilters.onlySale = event.target.checked; render(); }
  if (filter === 'sort') { catalogFilters.sort = event.target.value; render(); }
  if (event.target.matches('[data-order-status]')) { const order = orders.find(item => item.id === event.target.dataset.orderStatus); if (order) { order.status = event.target.value; write('orders', orders); toast('Status do pedido atualizado'); } }
  if (event.target.matches('[data-admin-filter="category"]')) document.querySelectorAll('[data-product-row]').forEach(row => { row.hidden = Boolean(event.target.value) && row.dataset.category !== event.target.value; });
});
document.addEventListener('input', event => {
  if (event.target.id === 'header-search') { catalogFilters.search = event.target.value; }
  if (event.target.matches('[data-admin-search]')) { const query = event.target.value.toLowerCase(); document.querySelectorAll('tbody tr').forEach(row => { row.hidden = !row.textContent.toLowerCase().includes(query); }); }
  if (event.target.matches('input[type="color"]')) { const code = event.target.parentElement.querySelector('code'); if (code) code.textContent = event.target.value; }
});
document.addEventListener('change', event => {
  const input = event.target.closest('input[name="imageFile"]');
  if (!input) return;
  const file = input.files?.[0], preview = input.form.querySelector('[data-image-preview]');
  if (!file || !preview) return;
  if (!/^image\/(?:jpeg|png|webp|avif)$/.test(file.type) || file.size > 12 * 1024 * 1024) {
    input.value = '';
    toast(file.size > 12 * 1024 * 1024 ? 'A imagem deve ter até 12 MB' : 'Escolha uma imagem JPG, PNG, WebP ou AVIF');
    return;
  }
  const imageUrl = URL.createObjectURL(file), image = document.createElement('img'), label = document.createElement('span');
  image.src = imageUrl; image.alt = 'Prévia da imagem selecionada';
  image.addEventListener('load', () => URL.revokeObjectURL(imageUrl), { once: true });
  label.textContent = file.name;
  preview.replaceChildren(image, label);
});
document.addEventListener('submit', async event => {
  const form = event.target.closest('form[data-form]'); if (!form) return;
  event.preventDefault(); const data = formObject(form), type = form.dataset.form;
  if (type === 'search') { catalogFilters.search = data.q.trim(); if (route() === '/produtos') render(); else go('/produtos'); }
  if (type === 'newsletter') toast('Pronto! Você receberá novidades da Maison.');
  if (type === 'contact') { form.reset(); toast('Mensagem recebida. Obrigada por escrever!'); }
  if (type === 'login' || type === 'register') { const user = type === 'register' ? { name: data.name, email: data.email } : { name: data.email.split('@')[0], email: data.email }; write('user', user); toast('Acesso de demonstração iniciado'); go('/minha-conta'); }
  if (type === 'profile') { write('user', { ...read('user', {}), ...data }); toast('Dados atualizados neste navegador'); }
  if (type === 'review') { const list = reviews[data.productId] || []; list.push({ name: data.name, text: data.text, rating: Number(data.rating) }); reviews[data.productId] = list; write('reviews', reviews); render(); toast('Obrigada por compartilhar sua experiência'); }
  if (type === 'checkout') {
    const total = cartLines().reduce((sum, line) => sum + line.product.price * line.qty, 0), shipping = total >= 249 ? 0 : 18.9;
    const order = { id: `MB-${Date.now().toString().slice(-6)}`, customer: data.name, email: data.email, date: new Date().toISOString().slice(0,10), status: 'Pendente', total: total + shipping, items: cart.map(line => ({ ...line })) };
    orders.unshift(order); write('orders', orders); write('user', { name: data.name, email: data.email, phone: data.phone });
    cart.forEach(line => { const p = productById(line.id); if (p) p.stock = Math.max(0, p.stock - line.qty); }); saveProducts(); cart = []; saveCart(); go(`/pedido/${order.id}`); toast('Pedido de demonstração criado');
  }
  if (type === 'product') {
    const id = form.dataset.id || `custom-${Date.now()}`, existing = productById(id);
    let image = data.image || existing?.image || (existing?.catalogDetails ? '' : 'photo-1556229010-6c3f2c9ca5f8');
    const imageFile = form.elements.imageFile.files?.[0];
    if (imageFile) {
      try { image = await compressProductImage(imageFile); }
      catch (error) { toast(error.message || 'Não foi possível salvar a imagem.'); return; }
    }
    const product = { ...existing, id, slug: existing?.slug || id, name: data.name, brand: data.brand, category: data.category, price: Number(data.price), priceBasis: data.priceBasis === 'box' ? 'box' : 'unit', oldPrice: existing?.oldPrice ?? null, rating: existing?.catalogDetails ? existing.rating : '5.0', reviews: existing?.reviews ?? 0, badge: existing?.badge || 'Novo', stock: Number(data.stock), image, description: data.description || existing?.description || 'Produto cadastrado pela administração.' };
    const localImageBytes = [...customProducts.filter(item => item.id !== id), product].reduce((total, item) => total + (isLocalProductImage(item.image) ? item.image.length : 0), 0);
    if (localImageBytes > 3_500_000) { toast('O limite de imagens locais deste navegador foi atingido.'); return; }
    customProducts = customProducts.filter(item => item.id !== id); customProducts.unshift(product); write('products', customProducts); document.querySelector('.modal-backdrop')?.remove(); render(); toast('Produto salvo no catálogo local');
  }
  if (type === 'taxonomy') {
    const kind = form.dataset.kind;
    if (kind === 'category') {
      if (categories.some(category => category.name.toLowerCase() === data.name.trim().toLowerCase())) { toast('Essa categoria já existe'); return; }
      categories.push({ name: data.name.trim(), slug: data.name.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''), sub: 'Descubra a coleção', image: 'photo-1556229010-6c3f2c9ca5f8' }); write('categories', categories);
    } else {
      if (customBrands.some(brand => brand.toLowerCase() === data.name.trim().toLowerCase()) || allProducts().some(product => product.brand.toLowerCase() === data.name.trim().toLowerCase())) { toast('Essa marca já existe'); return; }
      customBrands.push(data.name.trim()); write('brands', customBrands);
    }
    document.querySelector('.modal-backdrop')?.remove(); render(); toast('Catálogo atualizado');
  }
  if (type === 'expense') { expenses.unshift({ ...data, amount: Number(data.amount), date: new Date().toISOString().slice(0,10) }); write('expenses', expenses); document.querySelector('.modal-backdrop')?.remove(); render(); toast('Despesa registrada'); }
  if (type === 'banner') { banners.push({ ...data, date: data.start && data.end ? `${data.start} — ${data.end}` : 'Permanente' }); write('banners', banners); document.querySelector('.modal-backdrop')?.remove(); render(); toast('Banner salvo'); }
  if (type === 'settings') { settings = { ...settings, ...data }; write('settings', settings); render(); toast('Identidade visual salva'); }
});
window.addEventListener('hashchange', () => { detailQty = 1; render(); window.scrollTo(0,0); });
if (!location.hash) history.replaceState(null, '', `${location.pathname}${location.search}#/`);
render();
