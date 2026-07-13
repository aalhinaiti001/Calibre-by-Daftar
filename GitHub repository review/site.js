document.documentElement.classList.add("js");

const pageSequence = [
  "index.html",
  "services.html",
  "about.html",
  "how-it-works.html",
  "scope-a-call.html",
  "insights.html"
];

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  bindMobileMenu();
  bindReveal();
  bindScopeForm();
});

function setActiveNav() {
  const page = currentPage();
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.getAttribute("href") === page) {
      link.classList.add("is-active");
    }
  });
}

function currentPage() {
  const parts = window.location.pathname.split("/");
  const file = parts[parts.length - 1];
  return file || "index.html";
}

function bindMobileMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function bindReveal() {
  const items = [...document.querySelectorAll(".reveal")];
  if (!items.length) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry, i) => {
          entry.target.style.setProperty("--reveal-delay", `${Math.min(i, 4) * 80}ms`);
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

function bindScopeForm() {
  const form = document.querySelector("[data-scope-form]");
  if (!form) return;

  const preview = document.querySelector("[data-mail-preview]");
  const draftButton = document.querySelector("[data-mailto-button]");

  const refreshPreview = () => {
    const data = collectFormData(form);
    if (preview) {
      preview.textContent = buildPreview(data);
    }
  };

  form.addEventListener("input", refreshPreview);
  form.addEventListener("change", refreshPreview);
  refreshPreview();

  if (draftButton) {
    draftButton.addEventListener("click", () => {
      const data = collectFormData(form);
      const subject = encodeURIComponent(
        `Scope request - ${data.service || "General inquiry"} - ${data.company || data.name || "Daftar website"}`
      );
      const body = encodeURIComponent(buildPreview(data));
      window.location.href = `mailto:ahmad@daftaradvisory.com?subject=${subject}&body=${body}`;
    });
  }
}

function collectFormData(form) {
  const fd = new FormData(form);
  return {
    name: (fd.get("name") || "").toString().trim(),
    company: (fd.get("company") || "").toString().trim(),
    email: (fd.get("email") || "").toString().trim(),
    market: (fd.get("market") || "").toString().trim(),
    service: (fd.get("service") || "").toString().trim(),
    timing: (fd.get("timing") || "").toString().trim(),
    message: (fd.get("message") || "").toString().trim()
  };
}

function buildPreview(data) {
  return [
    "Hello Ahmad,",
    "",
    "I would like to scope a call with Daftar Advisory.",
    "",
    `Name: ${data.name || "-"}`,
    `Company: ${data.company || "-"}`,
    `Email: ${data.email || "-"}`,
    `Market: ${data.market || "-"}`,
    `Service: ${data.service || "-"}`,
    `Timing: ${data.timing || "-"}`,
    "",
    "Inquiry:",
    data.message || "-"
  ].join("\n");
}
