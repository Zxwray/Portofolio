(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer:fine)').matches;
  const tiktokId = u => (String(u || '').match(/video\/(\d+)/) || [])[1] || '';

  /* ---------- image helper with placeholder ---------- */
  function media(src, alt, cls = '') {
    const fig = document.createElement('div');
    fig.className = 'media ' + cls;
    fig.dataset.src = src;
    const im = new Image();
    im.alt = alt; im.loading = 'lazy'; im.draggable = false; im.src = src;
    im.onerror = () => {
      fig.classList.add('is-missing');
      fig.innerHTML = `<div class="ph"><span>Add image</span><code>${src}</code></div>`;
    };
    fig.appendChild(im);
    return fig;
  }

  /* ---------- lightbox ---------- */
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `<button class="lb-close" aria-label="Close">✕</button>
    <button class="lb-nav prev" aria-label="Previous">‹</button>
    <div class="lb-stage"></div>
    <button class="lb-nav next" aria-label="Next">›</button>
    <p class="lb-cap"></p>`;
  document.body.appendChild(lb);
  let lbItems = [], lbIndex = 0;
  function lbShow() {
    const it = lbItems[lbIndex], st = $('.lb-stage', lb);
    st.innerHTML = '';
    if (it.yt) st.innerHTML = `<iframe src="https://www.youtube.com/embed/${it.yt}?autoplay=1" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
    else if (it.tiktok) st.innerHTML = `<iframe class="tt" src="https://www.tiktok.com/embed/v2/${it.tiktok}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    else if (it.video) st.innerHTML = `<video src="${it.video}" controls autoplay playsinline></video>`;
    else st.innerHTML = `<img src="${it.src}" alt="">`;
    $('.lb-cap', lb).textContent = it.caption || '';
    const multi = lbItems.length > 1;
    $('.prev', lb).style.display = $('.next', lb).style.display = multi ? '' : 'none';
  }
  function lbOpen(items, i) { lbItems = items; lbIndex = i; lbShow(); lb.classList.add('open'); document.body.classList.add('locked'); }
  function lbClose() { lb.classList.remove('open'); document.body.classList.remove('locked'); $('.lb-stage', lb).innerHTML = ''; }
  const lbStep = d => { lbIndex = (lbIndex + d + lbItems.length) % lbItems.length; lbShow(); };
  $('.lb-close', lb).onclick = lbClose;
  $('.prev', lb).onclick = () => lbStep(-1);
  $('.next', lb).onclick = () => lbStep(1);
  lb.addEventListener('click', e => { if (e.target === lb) lbClose(); });
  addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') lbClose();
    if (e.key === 'ArrowLeft') lbStep(-1);
    if (e.key === 'ArrowRight') lbStep(1);
  });
  function bindGroup(container, items) {
    $$('.media', container).forEach((m, i) =>
      m.addEventListener('click', () => { if (!m.classList.contains('is-missing')) lbOpen(items, i); }));
  }

  /* ---------- render: hero / about photos ---------- */
  $('#heroPhoto').appendChild(media(SITE.heroPhoto, 'Portrait of Wini Dimas'));
  $('#aboutPhoto').appendChild(media(SITE.aboutPhoto, 'Wini Dimas'));

  /* marquee */
  const mq = $('#marquee');
  const words = SITE.skillsMarquee.map(w => `<span>${w}</span>`).join('');
  mq.innerHTML = words + words;

  /* ---------- render: timeline ---------- */
  const tl = $('#timeline');
  JOURNEY.forEach((j, i) => {
    const el = document.createElement('div');
    el.className = `tl-item ${j.type} ${i % 2 ? 'right' : ''}`;
    el.setAttribute('data-reveal', i % 2 ? 'right' : 'left');
    el.innerHTML = `<span class="tl-dot"></span>
      <div class="tl-card"><div class="tl-year">${j.year}</div><h4>${j.title}</h4>
      <div class="tl-where">${j.where}</div><p>${j.desc}</p></div>`;
    tl.appendChild(el);
  });

  /* ---------- render: projects ---------- */
  const plist = $('#projectList');
  PROJECTS.forEach(p => {
    const art = document.createElement('article');
    art.className = 'project ' + (p.ratio === 'mobile' ? 'mobile' : '');
    art.id = p.id;
    art.innerHTML = `
      <div class="project-head" data-reveal>
        <span class="p-index">${p.index}</span>
        <div class="p-title"><small>${p.type}</small><h3>${p.title}</h3></div>
        <div class="arrows"><button aria-label="Previous">←</button><button aria-label="Next">→</button></div>
      </div>
      <div class="p-body" data-reveal>
        <p>${p.desc}</p>
        <div class="p-meta">
          <div><b>Role</b><br>${p.role}</div>
          <div class="tags">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
          ${p.note ? `<div class="note">${p.note}</div>` : ''}
          ${p.link ? `<a class="btn primary magnetic" href="${p.link}" target="_blank" rel="noopener">Visit live site <i>↗</i></a>` : ''}
        </div>
      </div>
      <div class="gallery-wrap" data-reveal><div class="gallery"></div></div>`;
    const gal = $('.gallery', art);
    p.features.forEach((f, i) => {
      const fig = document.createElement('figure');
      fig.className = 'shot';
      fig.appendChild(media(f.img, `${p.title} — ${f.name}`));
      const cap = document.createElement('figcaption');
      cap.innerHTML = `<b><em>${String(i + 1).padStart(2, '0')}</em>${f.name}</b><span>${f.desc}</span>`;
      fig.appendChild(cap);
      gal.appendChild(fig);
    });
    bindGroup(gal, p.features.map(f => ({ src: f.img, caption: `${p.title} — ${f.name}` })));
    const [prev, next] = $$('.arrows button', art);
    const step = () => ($('.shot', gal)?.offsetWidth || 400) + 22;
    prev.onclick = () => gal.scrollBy({ left: -step(), behavior: 'smooth' });
    next.onclick = () => gal.scrollBy({ left: step(), behavior: 'smooth' });
    // drag to scroll
    let down = false, sx = 0, sl = 0, moved = false;
    gal.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.pageX; sl = gal.scrollLeft; });
    addEventListener('pointerup', () => { down = false; gal.classList.remove('dragging'); });
    gal.addEventListener('pointermove', e => {
      if (!down) return;
      const dx = e.pageX - sx;
      if (Math.abs(dx) > 5) { moved = true; gal.classList.add('dragging'); }
      gal.scrollLeft = sl - dx;
    });
    gal.addEventListener('click', e => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
    plist.appendChild(art);
  });

  /* ---------- render: roblox / design / video ---------- */
  $('#robloxDesc').textContent = ROBLOX.desc;
  const rg = $('#robloxGrid');
  ROBLOX.shots.forEach(s => rg.appendChild(media(s.img, s.caption)));
  bindGroup(rg, ROBLOX.shots.map(s => ({ src: s.img, caption: s.caption })));
  $$('.media', rg).forEach((m, i) => { m.setAttribute('data-reveal', ''); m.style.setProperty('--d', i * .08 + 's'); });

  const dg = $('#designGrid'), df = $('#designFilters');
  const cats = ['All', ...new Set(DESIGNS.map(d => d.cat))];
  function renderDesigns(cat) {
    dg.innerHTML = '';
    const list = DESIGNS.filter(d => cat === 'All' || d.cat === cat);
    list.forEach((d, i) => {
      const m = media(d.img, d.caption);
      m.style.aspectRatio = d.ratio.replace(':', ' / ');
      m.style.animationDelay = i * .05 + 's';
      dg.appendChild(m);
    });
    bindGroup(dg, list.map(d => ({ src: d.img, caption: d.caption })));
  }
  df.innerHTML = cats.map(c => `<button data-cat="${c}">${c}</button>`).join('');
  df.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('button', df).forEach(x => x.classList.toggle('active', x === b));
    renderDesigns(b.dataset.cat);
  });
  $('button', df).classList.add('active');
  renderDesigns('All');

  const vg = $('#videoGrid');
  VIDEOS.forEach((v, i) => {
    const a = document.createElement('a');
    a.className = 'v-link';
    a.href = v.link; a.target = '_blank'; a.rel = 'noopener';
    a.setAttribute('data-reveal', ''); a.style.setProperty('--d', i * .1 + 's');
    a.innerHTML = `<span class="v-plat">${v.platform}</span>
    <span class="v-name">${v.title}</span>
    <span class="v-go">Watch video <i>↗</i></span>`;
    vg.appendChild(a);
  });

  /* ---------- render: programs ---------- */
  const pg = $('#programs');
  PROGRAMS.forEach((p, i) => {
    const c = document.createElement('div');
    c.className = 'card'; c.setAttribute('data-reveal', ''); c.style.setProperty('--d', (i % 3) * .1 + 's');
    c.innerHTML = `<span class="n">0${i + 1}</span><h4>${p.name}</h4><p>${p.desc}</p>`;
    c.addEventListener('pointermove', e => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', e.clientX - r.left + 'px');
      c.style.setProperty('--my', e.clientY - r.top + 'px');
    });
    pg.appendChild(c);
  });

  $('#year').textContent = new Date().getFullYear();

  /* ---------- loader ---------- */
  const loader = $('.loader'), bar = $('.loader-bar i'), cnt = $('.loader-count');
  let n = 0;
  document.body.classList.add('locked');
  const tick = setInterval(() => {
    n += Math.random() * 9 + 3;
    if (n >= 100) {
      n = 100; clearInterval(tick); setTimeout(() => {
        loader.classList.add('done'); document.body.classList.remove('locked'); document.body.classList.add('ready');
      }, 350);
    }
    bar.style.width = n + '%'; cnt.textContent = Math.floor(n);
  }, reduce ? 5 : 60);

  /* ---------- typed roles ---------- */
  const typed = $('#typed');
  let ri = 0, ci = 0, del = false;
  (function type() {
    const word = SITE.roles[ri];
    typed.textContent = word.slice(0, ci);
    if (!del && ci < word.length) { ci++; setTimeout(type, 80); }
    else if (!del) { del = true; setTimeout(type, 1500); }
    else if (ci > 0) { ci--; setTimeout(type, 40); }
    else { del = false; ri = (ri + 1) % SITE.roles.length; setTimeout(type, 300); }
  })();

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  $$('[data-reveal]').forEach(el => io.observe(el));

  /* counters */
  const co = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.count, plus = 'plus' in el.dataset;
    let v = 0; const t = setInterval(() => {
      v++; el.textContent = v + (v === target && plus ? '+' : '');
      if (v >= target) clearInterval(t);
    }, 160);
    co.unobserve(el);
  }), { threshold: .6 });
  $$('[data-count]').forEach(el => co.observe(el));

  /* ---------- scroll effects ---------- */
  const prog = $('.progress'), nav = $('.nav'), tlLine = $('.tl-line i'), blobs = $$('.blob');
  let ticking = false;
  function onScroll() {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    prog.style.width = (y / h * 100) + '%';
    nav.classList.toggle('scrolled', y > 40);
    blobs.forEach(b => b.style.transform = `translateY(${y * parseFloat(b.dataset.speed)}px)`);
    const r = tl.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * .6 - r.top) / r.height));
    tlLine.style.height = (p * 100) + '%';
    ticking = false;
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* active nav link */
  const links = $$('#navLinks a[href^="#"]');
  const so = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }), { threshold: .35 });
  ['about', 'journey', 'projects', 'creative', 'leadership', 'contact'].forEach(id => so.observe($('#' + id)));

  /* mobile menu */
  const burger = $('#burger'), nl = $('#navLinks');
  burger.onclick = () => { burger.classList.toggle('open'); nl.classList.toggle('open'); document.body.classList.toggle('locked'); };
  links.forEach(a => a.addEventListener('click', () => { burger.classList.remove('open'); nl.classList.remove('open'); document.body.classList.remove('locked'); }));

  /* ---------- pointer effects (desktop only) ---------- */
  if (fine && !reduce) {
    // custom cursor
    const cur = $('.cursor'), dot = $('.dot'), ring = $('.ring');
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px,${my}px)`; });
    (function loop() { rx += (mx - rx) * .15; ry += (my - ry) * .15; ring.style.transform = `translate(${rx}px,${ry}px)`; requestAnimationFrame(loop); })();
    document.addEventListener('pointerover', e => cur.classList.toggle('hover', !!e.target.closest('a,button,.media:not(.is-missing),.v-card,.card')));

    // magnetic buttons
    $$('.magnetic').forEach(b => {
      b.addEventListener('pointermove', e => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px,${(e.clientY - r.top - r.height / 2) * .35}px)`;
      });
      b.addEventListener('pointerleave', () => b.style.transform = '');
    });

    // hero photo tilt
    const hp = $('.hero-photo'), frame = $('.frame', hp);
    hp.addEventListener('pointermove', e => {
      const r = hp.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      frame.style.animation = 'none'; frame.style.opacity = 1;
      frame.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
    });
    hp.addEventListener('pointerleave', () => frame.style.transform = '');
  }
})();
