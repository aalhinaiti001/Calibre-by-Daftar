/* ==========================================================================
   Calibre by Daftar — Interactions
   ========================================================================== */

/* --------------------------------------------------------------------------
   Site configuration — change contact details in one place.
   -------------------------------------------------------------------------- */
const SITE = {
  email: 'ahmad@daftaradvisory.com',
  phone: '+962798880035',
  // Optional: paste a Formspree endpoint (https://formspree.io) to have the
  // contact form POST directly to your inbox without opening a mail client.
  // Leave empty ('') to use the built-in mailto: fallback, which works with
  // zero setup and no backend.
  formEndpoint: 'https://formspree.io/f/xzdlnnva'
};

/* --------------------------------------------------------------------------
   Count-up animation for the proof card scores
   -------------------------------------------------------------------------- */
(function () {
  const scores = document.querySelectorAll('.proof-score');
  let animated = false;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateScores() {
    if (animated) return;
    animated = true;
    scores.forEach(function (el) {
      const target = parseInt(el.getAttribute('data-target'), 10);
      if (prefersReducedMotion) {
        el.textContent = target;
        return;
      }
      const duration = 900;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  const proofCard = document.querySelector('.proof-card');
  if (proofCard && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateScores();
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(proofCard);
  } else {
    animateScores();
  }
})();

/* --------------------------------------------------------------------------
   Scroll-linked stepper: Read → Score → Compare → Calibrate
   -------------------------------------------------------------------------- */
(function () {
  const cards = document.querySelectorAll('.module-card[data-step]');
  const nodes = document.querySelectorAll('.method-stepper-node[data-step]');
  const lines = document.querySelectorAll('.method-stepper-line[data-line]');
  if (!cards.length || !('IntersectionObserver' in window)) return;

  function setActive(step) {
    nodes.forEach(function (node) {
      const s = parseInt(node.getAttribute('data-step'), 10);
      node.classList.toggle('active', s <= step);
    });
    lines.forEach(function (line) {
      const l = parseInt(line.getAttribute('data-line'), 10);
      line.classList.toggle('filled', l < step);
    });
  }

  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const step = parseInt(entry.target.getAttribute('data-step'), 10);
        setActive(step);
      }
    });
  }, { threshold: 0.5, rootMargin: '-10% 0px -10% 0px' });

  cards.forEach(function (card) { io.observe(card); });
})();

/* --------------------------------------------------------------------------
   Current year in the footer
   -------------------------------------------------------------------------- */
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

/* --------------------------------------------------------------------------
   Contact form

   Two modes, controlled by SITE.formEndpoint above:
   1. Formspree (or any POST endpoint) — set formEndpoint to your URL and the
      form submits by fetch(), with no page reload and an inline confirmation.
   2. mailto: fallback (default) — composes a pre-filled email to SITE.email
      using the visitor's own mail client. No backend, no signup required.
   -------------------------------------------------------------------------- */
(function () {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form) return;

  function setStatus(msg, kind) {
    if (!status) return;
    status.textContent = msg;
    status.className = 'form-status' + (kind ? ' ' + kind : '');
  }

  function fieldValues() {
    return {
      name: (form.name.value || '').trim(),
      company: (form.company.value || '').trim(),
      email: (form.email.value || '').trim(),
      role: (form.role.value || '').trim(),
      message: (form.message.value || '').trim()
    };
  }

  function validEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validate(v) {
    if (!v.name) return 'Please add your name.';
    if (!validEmail(v.email)) return 'Please enter a valid email address.';
    if (!v.message) return 'Please tell us a little about the role.';
    return null;
  }

  function sendViaMailto(v) {
    const subject = 'Calibre enquiry — ' + (v.company || v.name);
    const bodyLines = [
      'Name: ' + v.name,
      'Company: ' + (v.company || '—'),
      'Email: ' + v.email,
      'Role to diagnose: ' + (v.role || '—'),
      '',
      'Message:',
      v.message
    ];
    const href = 'mailto:' + SITE.email +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(bodyLines.join('\n'));
    window.location.href = href;
    setStatus('Opening your email app… if nothing happens, email ' + SITE.email + ' directly.', 'success');
  }

  function sendViaEndpoint(v) {
    setStatus('Sending…', '');
    fetch(SITE.formEndpoint, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(v)
    })
      .then(function (res) {
        if (res.ok) {
          form.reset();
          setStatus('Thanks — your enquiry is on its way. We reply within one business day.', 'success');
        } else {
          setStatus('Something went wrong. Please email ' + SITE.email + ' directly.', 'error');
        }
      })
      .catch(function () {
        setStatus('Network error. Please email ' + SITE.email + ' directly.', 'error');
      });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const v = fieldValues();
    const error = validate(v);
    if (error) {
      setStatus(error, 'error');
      return;
    }
    if (SITE.formEndpoint) {
      sendViaEndpoint(v);
    } else {
      sendViaMailto(v);
    }
  });
})();
