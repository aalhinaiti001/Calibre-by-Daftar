/* Calibre Verdict — rendering and navigation.
   Rooms are sections in index.html; the URL hash (#method, #faq, ...) selects one. */
(function () {
  'use strict';

  const C = window.CALIBRE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  let route = '';
  let step = 0;

  /* ---------- Static lists: rendered once ---------- */

  function renderStatic() {
    const docs = C.deliverables.slice(0, -1);
    const memo = C.deliverables[C.deliverables.length - 1];
    const roman = C.rooms.map((r) => r.num);

    $('docs').innerHTML = docs.map(([title, body], i) => `
      <div class="doc-row">
        <span class="doc-row__num">${roman[i]}</span>
        <span class="doc-row__title">${esc(title)}</span>
        <span class="doc-row__body">${esc(body)}</span>
      </div>`).join('');

    $('memo').innerHTML = `
      <span class="doc-row__num">${roman[docs.length]}</span>
      <span class="doc-row__title">${esc(memo[0])}</span>
      <span class="doc-row__body">${esc(memo[1])}</span>`;

    $('seats').innerHTML = C.seats.map(([role, q, body]) => `
      <div class="seat">
        <span class="seat__role">${esc(role)}</span>
        <span class="seat__q">${esc(q)}</span>
        <span class="seat__body">${esc(body)}</span>
      </div>`).join('');

    $('phases').innerHTML = C.phases.map(([title, body], i) => `
      <li class="phase">
        <span class="phase__n">${i + 1}</span>
        <span><span class="phase__title">${esc(title)}.</span> <span class="phase__body">${esc(body)}</span></span>
      </li>`).join('');

    $('terms').innerHTML = C.terms.map(([k, v]) => `
      <div class="terms__row"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');

    $('faqs').innerHTML = C.faqs.map(([q, a]) => `
      <div class="faq"><h3 class="faq__q">${esc(q)}</h3><p class="faq__a">${esc(a)}</p></div>`).join('');

    $('nav').innerHTML = C.rooms.map((r) => `
      <a class="nav__item" href="#${r.id}" data-go="${r.id}">
        <span class="nav__num">${r.num}</span><span>${esc(r.name)}</span>
      </a>`).join('');
  }

  /* ---------- Method: the one interactive room ---------- */

  function renderMethod() {
    const read = step >= 1;
    const compared = step >= 2;

    $('steps').innerHTML = C.steps.map(([title, body], i) => `
      <button type="button" class="step${i <= step ? ' is-reached' : ''}" data-step="${i}" aria-pressed="${i === step}">
        <span class="step__n">${i + 1}</span>
        <span><span class="step__title">${esc(title)}</span><span class="step__body">${esc(body)}</span></span>
      </button>`).join('');

    $('criteria').innerHTML = C.criteria.map(([name, a, b, diverge]) => {
      const cls = read ? 'is-read' : '';
      const bCls = compared && diverge ? 'is-flagged' : cls;
      return `<tr>
        <td>${esc(name)}</td>
        <td class="${cls}">${read ? esc(a) : '—'}</td>
        <td class="${bCls}">${read ? esc(b) : '—'}</td>
      </tr>`;
    }).join('');

    $('stepLabel').textContent = `Step ${step + 1} · ${C.steps[step][0]}`;
    $('stepNote').textContent = C.steps[step][2];
  }

  /* ---------- Routing ---------- */

  function render() {
    const idx = C.routes.indexOf(route);
    const roomIdx = C.rooms.findIndex((r) => r.id === route);

    document.querySelectorAll('[data-room]').forEach((s) => { s.hidden = s.dataset.room !== route; });
    document.querySelectorAll('.nav__item').forEach((a) => {
      if (a.dataset.go === route) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });

    $('roomLabel').textContent = roomIdx >= 0 ? `Room ${roomIdx + 1} of ${C.rooms.length}`
      : route === 'contact' ? 'Next step' : 'Entrance';

    const prev = $('prev');
    const next = $('next');
    prev.hidden = idx <= 0;
    prev.textContent = `← ${C.labels[C.routes[idx - 1]] || ''}`;
    // The landing hero carries its own primary action, so the footer doesn't repeat it.
    next.hidden = !(idx > 0 && idx < C.routes.length - 1);
    next.textContent = `${C.labels[C.routes[idx + 1]] || ''} →`;

    document.title = route ? `${C.labels[route]} · Calibre Verdict` : 'Calibre Verdict · Calibre by Daftar';
    if (route === 'method') renderMethod();
  }

  function parse() {
    const h = location.hash.replace('#', '');
    return C.routes.includes(h) ? h : '';
  }

  function go(r) {
    if (r) location.hash = r;
    else history.pushState(null, '', location.pathname + location.search);
    route = r;
    render();
    $('main').scrollTop = 0;
  }

  function shift(d) {
    const j = C.routes.indexOf(route) + d;
    if (j >= 0 && j < C.routes.length) go(C.routes[j]);
  }

  /* ---------- Contact: copy the address ---------- */

  function copyEmail() {
    const btn = $('copyEmail');
    const done = (t) => { btn.textContent = t; setTimeout(() => { btn.textContent = 'Copy'; }, 1600); };
    const select = () => {
      const r = document.createRange();
      r.selectNodeContents($('email'));
      const s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
      done('Selected');
    };
    try {
      navigator.clipboard.writeText(C.contactEmail).then(() => done('Copied'), select);
    } catch (e) {
      select();
    }
  }

  /* ---------- Wiring ---------- */

  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-go]');
    if (target) { e.preventDefault(); go(target.dataset.go); return; }
    const s = e.target.closest('[data-step]');
    if (s) { step = Number(s.dataset.step); renderMethod(); }
  });
  $('prev').addEventListener('click', () => shift(-1));
  $('next').addEventListener('click', () => shift(1));
  $('copyEmail').addEventListener('click', copyEmail);
  window.addEventListener('keydown', (e) => {
    if (e.target.closest && e.target.closest('input, textarea')) return;
    if (e.key === 'ArrowRight') shift(1);
    if (e.key === 'ArrowLeft') shift(-1);
  });
  window.addEventListener('hashchange', () => { route = parse(); render(); });

  renderStatic();
  route = parse();
  render();
})();
