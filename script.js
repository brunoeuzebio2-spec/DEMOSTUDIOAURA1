/* ================================================================
   STUDIO AURA — SCRIPT
   Lê tudo de CONFIG (config.js) e injeta no HTML.
   Para trocar de cliente, edite apenas config.js — este arquivo
   não deve precisar de alterações.
   ================================================================ */

(function () {

  const $ = (id) => document.getElementById(id);

  /* ---------- 1. aplica a paleta de cores do config nas variáveis CSS ---------- */
  function applyColors() {
    const root = document.documentElement.style;
    const c = CONFIG.colors;
    root.setProperty("--bg", c.bg);
    root.setProperty("--bg-secondary", c.bgSecondary);
    root.setProperty("--text", c.text);
    root.setProperty("--accent", c.accent);
    root.setProperty("--accent-dark", c.accentDark);
    root.setProperty("--white", c.white);
  }

  /* ---------- 2. helpers ---------- */
  function whatsappLink(message) {
    const msg = encodeURIComponent(message || CONFIG.contact.whatsappMessage);
    return `https://wa.me/${CONFIG.contact.whatsappNumber}?text=${msg}`;
  }

  function setText(id, text) {
    const el = $(id);
    if (el) el.textContent = text;
  }

  function setHref(id, href) {
    const el = $(id);
    if (el) el.href = href;
  }

  /* ---------- 3. carrega o sprite de ícones ---------- */
  async function loadIconSprite() {
    try {
      const res = await fetch("assets/icons/icons.svg");
      const svgText = await res.text();
      $("icon-sprite").innerHTML = svgText;
    } catch (e) {
      console.error("Não foi possível carregar os ícones:", e);
    }
  }

  /* ---------- 4. metadados da página ---------- */
  function renderMeta() {
    document.title = CONFIG.site.title;
    setText("brand-logo", CONFIG.site.brandName);
    setText("footer-logo", CONFIG.site.brandName);
  }

  /* ---------- 5. header ---------- */
  function renderHeader() {
    const link = $("header-whatsapp");
    link.href = whatsappLink();
  }

  /* ---------- 6. hero ---------- */
  function renderHero() {
    setText("hero-slogan", CONFIG.site.slogan);
    setText("hero-title", CONFIG.hero.title);
    setText("hero-subtitle", CONFIG.hero.subtitle);

    const primary = $("hero-btn-primary");
    primary.textContent = CONFIG.hero.primaryButton;
    primary.href = whatsappLink();

    setText("hero-btn-secondary", CONFIG.hero.secondaryButton);

    const img = $("hero-image");
    img.src = CONFIG.hero.image;
    img.alt = CONFIG.hero.imageAlt;
  }

  /* ---------- 7. apresentação ---------- */
  function renderIntro() {
    setText("intro-heading", CONFIG.intro.heading);
    setText("intro-text", CONFIG.intro.text);
    setText("intro-btn", CONFIG.intro.button);

    const img = $("intro-image");
    img.src = CONFIG.intro.image;
    img.alt = CONFIG.intro.imageAlt;
  }

  /* ---------- 8. serviços ---------- */
  function renderServices() {
    setText("services-heading", CONFIG.services.heading);
    const grid = $("services-grid");
    grid.innerHTML = CONFIG.services.items.map((item) => `
      <article class="service-card">
        <div class="service-card__media">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="service-card__body">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          ${item.price ? `<span class="service-card__price">${item.price}</span>` : ""}
        </div>
      </article>
    `).join("");
  }

  /* ---------- 9. diferenciais ---------- */
  function renderDifferentials() {
    setText("differentials-heading", CONFIG.differentials.heading);
    const list = $("differentials-list");
    list.innerHTML = CONFIG.differentials.items.map((item) => `
      <div class="differential-item">
        <span class="differential-item__icon">
          <svg class="icon icon--sm"><use href="#icon-leaf"></use></svg>
        </span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    `).join("");
  }

  /* ---------- 10. galeria ---------- */
  function renderGallery() {
    setText("gallery-heading", CONFIG.gallery.heading);
    const grid = $("gallery-grid");
    grid.innerHTML = CONFIG.gallery.images.map((img) => `
      <a href="${img.src}" target="_blank" rel="noopener" aria-label="Ampliar imagem">
        <img src="${img.src}" alt="${img.alt}" loading="lazy">
      </a>
    `).join("");
  }

  /* ---------- 11. depoimentos ---------- */
  function renderTestimonials() {
    setText("testimonials-heading", CONFIG.testimonials.heading);
    setText("testimonials-notice", CONFIG.testimonials.demoNotice);
    const grid = $("testimonials-grid");
    grid.innerHTML = CONFIG.testimonials.items.map((t) => `
      <div class="testimonial-card">
        <svg class="icon"><use href="#icon-quote"></use></svg>
        <p>"${t.text}"</p>
        <div class="testimonial-card__author">
          <span class="testimonial-card__avatar">${t.initials}</span>
          <span>Cliente Studio Aura</span>
        </div>
      </div>
    `).join("");
  }

  /* ---------- 12. CTA ---------- */
  function renderCta() {
    setText("cta-heading", CONFIG.cta.heading);
    setText("cta-text", CONFIG.cta.text);
    const btn = $("cta-btn");
    btn.textContent = CONFIG.cta.button;
    btn.href = whatsappLink();
  }

  /* ---------- 13. localização ---------- */
  function renderLocation() {
    setText("location-heading", CONFIG.locationSection.heading);
    setText("location-address1", CONFIG.location.addressLine1);
    setText("location-address2", CONFIG.location.addressLine2);

    const hoursHtml = CONFIG.location.hours
      .map((h) => `<p>${h.days} — ${h.time}</p>`)
      .join("");
    $("location-hours").innerHTML = hoursHtml;

    const btn = $("location-btn");
    btn.textContent = CONFIG.locationSection.button;
    btn.href = CONFIG.location.mapsUrl;
  }

  /* ---------- 14. footer ---------- */
  function renderFooter() {
    setText("footer-about", CONFIG.footer.about);
    setText("footer-phone", CONFIG.contact.phoneDisplay);
    setText("footer-email", CONFIG.contact.email);
    setText("footer-address1", CONFIG.location.addressLine1);
    setText("footer-address2", CONFIG.location.addressLine2);
    setText("footer-credit", CONFIG.footer.credit);

    const hoursHtml = CONFIG.location.hours
      .map((h) => `<p>${h.days}<br>${h.time}</p>`)
      .join("");
    $("footer-hours").innerHTML = hoursHtml;

    setHref("footer-whatsapp", whatsappLink());
    setHref("footer-instagram", CONFIG.contact.instagramUrl);
  }

  /* ---------- 15. botão flutuante ---------- */
  function renderFloatingButton() {
    setHref("whatsapp-float", whatsappLink());
  }

  /* ---------- 16. interações ---------- */
  function bindInteractions() {
    // header muda de estilo ao rolar
    const header = $("header");
    window.addEventListener("scroll", () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    });

    // menu mobile
    const mobileNav = $("mobile-nav");
    $("nav-toggle").addEventListener("click", () => mobileNav.classList.add("is-open"));
    $("mobile-nav-close").addEventListener("click", () => mobileNav.classList.remove("is-open"));
    mobileNav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => mobileNav.classList.remove("is-open"))
    );
  }

  /* ---------- inicialização ---------- */
  async function init() {
    applyColors();
    await loadIconSprite();
    renderMeta();
    renderHeader();
    renderHero();
    renderIntro();
    renderServices();
    renderDifferentials();
    renderGallery();
    renderTestimonials();
    renderCta();
    renderLocation();
    renderFooter();
    renderFloatingButton();
    bindInteractions();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
