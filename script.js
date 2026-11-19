/* ===================================================================
   LIENS DU STUDIO : le seul endroit à modifier.
   - steam     : l'URL de la page Steam d'Hexplore (vide tant qu'elle
                 n'existe pas : les boutons Steam mènent alors à Instagram).
   - instagram : le compte (le pseudo affiché en est déduit).
   - email     : l'adresse Gmail de contact (vide : la carte disparaît).
   =================================================================== */
const LIENS = {
  steam: "",                                          // ex. "https://store.steampowered.com/app/1234560/Hexplore/"
  instagram: "https://www.instagram.com/redpawsstudio/",
  email: "redpawsstudio@gmail.com",                   // À CRÉER : si elle est déjà prise chez Gmail, mettre la vraie ici
};

(function () {
  const $$ = (s) => document.querySelectorAll(s);

  // Pseudo Instagram tiré de l'URL
  const handle = (LIENS.instagram.match(/instagram\.com\/([^/?#]+)/) || [])[1];
  if (handle) $$('[data-text="instagram-handle"]').forEach((el) => (el.textContent = "@" + handle));

  $$("[data-link]").forEach((el) => {
    const kind = el.dataset.link;
    if (kind === "instagram" && LIENS.instagram) {
      el.href = LIENS.instagram; el.target = "_blank"; el.rel = "noopener";
    } else if (kind === "email") {
      if (!LIENS.email) { el.hidden = true; return; }
      el.href = "mailto:" + LIENS.email;
      const t = el.querySelector('[data-text="email"]');
      if (t) {                                      // coupure possible juste après le @ (petits écrans)
        const [nom, domaine] = LIENS.email.split("@");
        t.replaceChildren(nom + "@", document.createElement("wbr"), domaine || "");
        t.classList.add("card__title--mail");
      }
    } else if (kind === "steam") {
      if (LIENS.steam) {
        el.href = LIENS.steam; el.target = "_blank"; el.rel = "noopener";
      } else if (el.classList.contains("icon-link")) {
        el.href = "#hexplore";                       // l'icône de l'en-tête reste sur la page
      } else {
        // Pas encore de page Steam : les boutons mènent à Instagram, avec un texte honnête
        el.href = LIENS.instagram || "#suivre";
        if (LIENS.instagram) { el.target = "_blank"; el.rel = "noopener"; }
        const label = el.querySelector("[data-label]");
        if (label && el.dataset.soon) {
          label.textContent = el.dataset.soon;                                   // le texte…
          el.querySelector("svg use")?.setAttribute("href", "#i-instagram");     // …et le logo suivent
        }
        const soon = el.querySelector("[data-soon-label]");
        if (soon) soon.textContent = "Page à venir : suivre sur Instagram";
      }
    }
  });
  // Trois cartes ou deux : la grille s'adapte
  const cards = document.querySelector(".cards");
  if (cards) cards.style.setProperty("--n", cards.querySelectorAll(".card:not([hidden])").length);

  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  // En-tête : fond au défilement
  const top = document.querySelector("[data-top]");
  const onScroll = () => top.classList.toggle("is-scrolled", window.scrollY > 20);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  // Menu téléphone
  const toggle = document.querySelector("[data-toggle]");
  const menu = document.getElementById("menu");
  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };
  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
})();
