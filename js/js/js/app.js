// Rendu partagé (header, footer, pastilles de catégories, cartes produit)
// injecté dans chaque page pour éviter de dupliquer le HTML.

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  el.innerHTML = `
    <header class="site-header">
      <div class="wrap">
        <a href="index.html" class="logo">SLA3<span>.</span></a>

        <form class="search-form" action="parcourir.html" method="get">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.4" />
            <path d="M11 11L14.5 14.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
          </svg>
          <input name="q" type="text" placeholder="Chercher un caftan, des baskets, un sac..." />
        </form>

        <nav class="header-nav">
          <a href="connexion.html" class="nav-link-muted">Se connecter</a>
          <a href="vendre.html" class="btn btn-majorelle btn-sm">Vendre</a>
        </nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const year = new Date().getFullYear();
  el.innerHTML = `
    <footer class="site-footer">
      <div class="wrap footer-grid">
        <div class="footer-brand">
          <p class="logo" style="font-size:1.125rem;">SLA3</p>
          <p>La seconde main, à la marocaine.</p>
        </div>
        <div>
          <h4>SLA3</h4>
          <ul>
            <li>Comment ça marche</li>
            <li>Protection acheteur</li>
            <li>Frais et paiements</li>
          </ul>
        </div>
        <div>
          <h4>Assistance</h4>
          <ul>
            <li>Centre d'aide</li>
            <li>Signaler une annonce</li>
            <li>Nous contacter</li>
          </ul>
        </div>
        <div>
          <h4>Villes</h4>
          <ul>
            <li>Casablanca</li>
            <li>Rabat</li>
            <li>Marrakech</li>
          </ul>
        </div>
      </div>
      <div class="wrap footer-note">
        © ${year} SLA3 — Projet de démonstration, non affilié à Vinted.
      </div>
    </footer>
  `;
}

function renderCategoryPills(container, activeSlug) {
  if (!container) return;
  container.innerHTML = CATEGORIES.map((c) => `
    <a href="parcourir.html?categorie=${c.slug}" class="cat-pill ${c.slug === activeSlug ? "active" : ""}">
      <span aria-hidden="true">${c.emoji}</span>${c.label}
    </a>
  `).join("");
}

function productCardHTML(p) {
  return `
    <a href="produit.html?id=${p.id}" class="product-card">
      <div class="thumb">
        ${tilePatternSVG(p.patternSeed, p.palette)}
        <span class="badge">${p.condition}</span>
      </div>
      <div class="info">
        <p class="title">${p.title}</p>
        <div class="price-row">
          <p class="price">${p.price} DH</p>
          ${p.size ? `<span class="size">Taille ${p.size}</span>` : ""}
        </div>
        <p class="city">${p.city}</p>
      </div>
    </a>
  `;
}

function getQueryParams() {
  return Object.fromEntries(new URLSearchParams(window.location.search));
}

// Toujours rendre le header et le footer au chargement de chaque page.
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});
