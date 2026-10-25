document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 40));
  if (toggle && navMenu) toggle.addEventListener('click', () => navMenu.classList.toggle('open'));

  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.nav === 'certificates'));

  const id = new URLSearchParams(location.search).get('id');
  const data = CERT_DATA[id];
  const root = document.getElementById('details-root');

  if (!data) {
    root.innerHTML = '<div class="gallery-empty">That credential could not be found. <a href="index.html#certificates" style="color:var(--accent-teal)">Back to certificates</a></div>';
    return;
  }

  document.title = data.title + ' | Aliyu Mustapha';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  const mainItems = data.gallery.filter(g => g.type !== 'pdf');
  const images = mainItems.flatMap(g => [g, ...(g.more || [])]);
  const gridHtml = data.gallery.length
    ? '<div class="gallery-grid">' + data.gallery.map(g => g.type === 'pdf'
        ? `<a class="gallery-item pdf-item" href="${esc(g.src)}" target="_blank" rel="noopener"><div class="gallery-caption">📄 ${esc(g.caption || 'Open PDF')}</div></a>`
        : `<button class="gallery-item" data-idx="${images.indexOf(g)}"><span class="thumb-wrap"><img src="${esc(g.type === 'video' ? g.poster : (g.thumb || g.src))}" alt="${esc(g.caption || data.title)}" loading="lazy"${g.fit === 'contain' ? ' class="fit-contain"' : ''}>${g.type === 'video' ? '<span class="play-badge" aria-hidden="true">&#9654;</span>' : ''}</span><div class="gallery-caption">${esc(g.caption || '')}</div></button>`
      ).join('') + '</div>'
    : '<div class="gallery-empty">Certificate and activity photos will be added here soon.</div>';


  const mediaBtn = g => `<button class="story-media" data-idx="${images.indexOf(g)}" aria-label="Open: ${esc(g.title || g.caption || 'media')}"><img src="${esc(g.type === 'video' ? g.poster : (g.thumb || g.src))}" alt="${esc(g.caption || g.title || data.title)}" loading="lazy"${g.fit === 'contain' ? ' class="fit-contain"' : ''}>${g.type === 'video' ? '<span class="play-badge" aria-hidden="true">&#9654;</span>' : ''}</button>`;
  const storyHtml = '<div class="story-list">' + mainItems.map((g, n) => `
    ${g.group ? `<h3 class="story-group">${esc(g.group)}</h3>` : ''}
    <article class="story${n % 2 ? ' story-flip' : ''}">
      <div class="story-text">
        <h3 class="story-title">${esc(g.title || g.caption || '')}</h3>
        ${g.tagline ? `<p class="story-tagline">${esc(g.tagline)}</p>` : ''}
        ${(g.story || []).map(x => `<p>${esc(x)}</p>`).join('')}
      </div>
      <div class="story-media-col">${[g, ...(g.more || [])].map(mediaBtn).join('')}</div>
    </article>`).join('') + '</div>' +
    (data.outro ? `<div class="story-outro"><h3 class="story-title">${esc(data.outro.title)}</h3>${data.outro.tagline ? `<p class="story-tagline">${esc(data.outro.tagline)}</p>` : ''}${(data.outro.text || []).map(x => `<p>${esc(x)}</p>`).join('')}</div>` : '') +
    data.gallery.filter(g => g.type === 'pdf').map(g => `<a class="gallery-item pdf-item" href="${esc(g.src)}" target="_blank" rel="noopener" style="margin-top:2rem"><div class="gallery-caption">&#128196; ${esc(g.caption || 'Open PDF')}</div></a>`).join('');
  const galleryHtml = data.layout === 'story' ? storyHtml : gridHtml;

  root.innerHTML = `
    <section class="details-hero">
      <div class="details-logo-box"><img src="${esc(data.logo)}" alt="${esc(data.title)} logo"></div>
      <div>
        <h1 class="details-title">${esc(data.title)}</h1>
        <p class="details-issuer">${esc(data.issuer)}</p>
        <div class="details-meta">
          <span class="${esc(data.badgeClass)}">${esc(data.badge)}</span>
          <div class="cert-tags">${data.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>
        </div>
        <p class="details-desc">${esc(data.description)}</p>
        ${data.verifyUrl ? `<a class="btn btn-sm btn-outline-teal verify-btn" href="${esc(data.verifyUrl)}" target="_blank" rel="noopener noreferrer">Verify this credential</a>` : ''}
      </div>
    </section>
    ${data.intro
      ? `<div class="story-intro"><h2 class="gallery-heading">${esc(data.intro.title)}</h2>${data.intro.tagline ? `<p class="story-tagline">${esc(data.intro.tagline)}</p>` : ''}${(data.intro.text || []).map(x => `<p>${esc(x)}</p>`).join('')}</div>`
      : `<h2 class="gallery-heading">${esc(data.galleryHeading || 'Certificates & Activity Photos')}</h2>`}
    ${galleryHtml}`;

  if (window.initReveal) window.initReveal();

  // Lightbox
  const lb = document.getElementById('lightbox');
  const lbImg = lb.querySelector('img');
  const lbVid = lb.querySelector('video');
  const lbCap = lb.querySelector('.lightbox-caption');
  let cur = 0;
  const stopVideo = () => { lbVid.pause(); lbVid.removeAttribute('src'); lbVid.removeAttribute('poster'); lbVid.load(); };
  const show = i => {
    cur = (i + images.length) % images.length;
    const g = images[cur];
    stopVideo();
    if (g.type === 'video') {
      lb.classList.add('is-video');
      lbVid.poster = g.poster || '';
      lbVid.src = g.src;
      lbVid.play().catch(() => {});
    } else {
      lb.classList.remove('is-video');
      lbImg.src = g.src;
      lbImg.alt = g.caption || data.title;
    }
    lbCap.textContent = g.caption || '';
    lb.classList.add('open');
  };
  const close = () => { stopVideo(); lb.classList.remove('open'); };
  root.querySelectorAll('button[data-idx]').forEach(b => b.addEventListener('click', () => show(+b.dataset.idx)));
  lb.querySelector('.lightbox-close').addEventListener('click', close);
  lb.querySelector('.lightbox-prev').addEventListener('click', () => show(cur - 1));
  lb.querySelector('.lightbox-next').addEventListener('click', () => show(cur + 1));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(cur - 1);
    if (e.key === 'ArrowRight') show(cur + 1);
  });
});
