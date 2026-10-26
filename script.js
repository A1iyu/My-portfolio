/**
 * ALIYU MUSTAPHA ABDULHAMID - PORTFOLIO INTERACTION ENGINE
 * Features: Terminal-Styled Summary Typing (Image 1), Cyber Canvas Particles,
 * Live West Africa Time (WAT) Clock, Clipboard Copy Utilities, and Smooth Scroll Spy.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTerminalTypingSummary();
  initCyberCanvas();
  initNavbarScroll();
  initClipboard();
  initLiveClock();
  initScrollSpy();
  initAboutStory();
});

/* ==========================================================================
   1. TERMINAL-STYLED SUMMARY TYPING ANIMATION (EXACTLY MATCHING IMAGE 1)
   ========================================================================== */

// Sequence corresponding directly to Image 1:
// # who am i
// $ whoami
// aliyu_mustapha
// $ cat focus.txt
// frontend · it-support · cybersec
// $ ls skills/
// javascript  html-css  git  networking  repair
// $ status
// 3MTT software dev: active
// █
const terminalSequence = [
  { type: 'comment', text: '# who am i', delay: 350 },
  { type: 'cmd', text: 'whoami', delay: 400 },
  { type: 'output', class: 'term-output-whoami', text: 'aliyu_mustapha', delay: 300 },
  { type: 'cmd', text: 'cat focus.txt', delay: 450 },
  { type: 'output', class: 'term-output-focus', text: 'frontend · it-support · cybersec', delay: 350 },
  { type: 'cmd', text: 'ls skills/', delay: 500 },
  { type: 'output', class: 'term-output-skills', text: 'javascript  html-css  git  networking  repair', delay: 350 },
  { type: 'cmd', text: 'status', delay: 500 },
  { type: 'output', class: 'term-output-status', text: '3MTT software dev: active', delay: 350 }
];

function initTerminalTypingSummary() {
  const container = document.getElementById('terminal-content');
  if (!container) return;

  container.innerHTML = '';
  let step = 0;

  function runNext() {
    if (step >= terminalSequence.length) {
      // Append the blinking cursor block exactly like in Image 1
      const cursorLine = document.createElement('div');
      cursorLine.className = 'term-line term-cursor-line';
      cursorLine.innerHTML = '<span class="terminal-cursor">█</span>';
      container.appendChild(cursorLine);
      return;
    }

    const item = terminalSequence[step];
    step++;

    if (item.type === 'comment') {
      const line = document.createElement('div');
      line.className = 'term-line term-comment';
      line.textContent = item.text;
      container.appendChild(line);
      setTimeout(runNext, item.delay);
    } 
    else if (item.type === 'cmd') {
      const line = document.createElement('div');
      line.className = 'term-line term-cmd';
      line.innerHTML = `<span class="prompt-sym">$</span><span class="cmd-text"></span>`;
      container.appendChild(line);

      const textSpan = line.querySelector('.cmd-text');
      let idx = 0;

      function typeChar() {
        if (idx < item.text.length) {
          textSpan.textContent += item.text.charAt(idx);
          idx++;
          setTimeout(typeChar, 35 + Math.random() * 20);
        } else {
          setTimeout(runNext, item.delay);
        }
      }
      typeChar();
    } 
    else if (item.type === 'output') {
      const line = document.createElement('div');
      line.className = `term-line term-output ${item.class || ''}`;
      line.textContent = item.text;
      container.appendChild(line);
      setTimeout(runNext, item.delay);
    }
  }

  // Start initial typing
  setTimeout(runNext, 400);
}

/* ==========================================================================
   2. CYBER CANVAS PARTICLES & CONNECTIVE CONSTELLATION
   ========================================================================== */
function initCyberCanvas() {
  const canvas = document.getElementById('cyber-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // Subtle cyber particles
  const count = Math.min(Math.floor(window.innerWidth / 22), 50);
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.8,
      color: Math.random() > 0.6 ? '#2dd4bf' : (Math.random() > 0.3 ? '#38bdf8' : '#1e3a5f')
    });
  }

  let mouseX = -1000;
  let mouseY = -1000;
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 6;
      ctx.shadowColor = p.color;
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(45, 212, 191, ${0.12 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }

      // Mouse interactive connection
      const mdx = p.x - mouseX;
      const mdy = p.y - mouseY;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 140) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.22 * (1 - mdist / 140)})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

/* ==========================================================================
   3. NAVBAR SCROLL & MOBILE DRAWER
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   4. CLIPBOARD COPY UTILITIES
   ========================================================================== */
function initClipboard() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied: ${textToCopy}`);
        }).catch(() => {
          fallbackCopy(textToCopy);
        });
      } else {
        fallbackCopy(textToCopy);
      }
    });
  });
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  showToast(`Copied: ${text}`);
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#2dd4bf" stroke-width="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 2800);
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ==========================================================================
   5. LIVE WEST AFRICA TIME (WAT) CLOCK
   ========================================================================== */
function initLiveClock() {
  const timeElem = document.getElementById('live-wat-time');
  if (!timeElem) return;

  function update() {
    // Nigeria is UTC+1 (WAT - West Africa Time)
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const watTime = new Date(utc + (3600000 * 1));

    const hours = String(watTime.getHours()).padStart(2, '0');
    const minutes = String(watTime.getMinutes()).padStart(2, '0');
    const seconds = String(watTime.getSeconds()).padStart(2, '0');

    timeElem.textContent = `WAT ${hours}:${minutes}:${seconds}`;
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   6. SCROLL SPY ACTIVE NAVIGATION
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 160;

    sections.forEach(sec => {
      const secTop = sec.offsetTop;
      const secHeight = sec.offsetHeight;
      if (scrollPos >= secTop && scrollPos < secTop + secHeight) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-nav') === current) {
        link.classList.add('active');
      }
    });
  });
}


/* ==========================================================================
   ABOUT ME: click-to-open winding story path (notes + pictures)
   ========================================================================== */
function initAboutStory() {
  const wrap = document.getElementById('about-journey');
  if (!wrap) return;
  const toggle = document.getElementById('journey-toggle');
  const panel = document.getElementById('journey-panel');
  const track = document.getElementById('journey-track');
  const stops = [...track.querySelectorAll('.stop')];

  // photos (or placeholders)
  const photosCfg = (typeof STORY_PHOTOS !== 'undefined') ? STORY_PHOTOS : {};
  const showPh = (typeof SHOW_PHOTO_PLACEHOLDERS === 'undefined') ? true : SHOW_PHOTO_PLACEHOLDERS;
  stops.forEach(st => {
    const box = st.querySelector('.stop-photo');
    const list = photosCfg[st.dataset.ch] || [];
    const title = st.querySelector('.stop-title').textContent;
    if (list.length) {
      list.forEach(ph => {
        const img = document.createElement('img');
        img.src = ph.src; img.alt = ph.alt || title; img.loading = 'lazy';
        box.appendChild(img);
      });
    } else if (showPh) {
      box.innerHTML = '<div class="photo-ph"><span aria-hidden="true">\uD83D\uDCF7</span><small>Photo coming soon</small></div>';
    } else {
      st.classList.add('no-photo');
    }
  });

  toggle.addEventListener('click', () => {
    const open = !wrap.classList.contains('open');
    wrap.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    const lbl = toggle.querySelector('.journey-label'); if (lbl) lbl.textContent = open ? 'Close story' : 'Read my story';
    if (open) panel.removeAttribute('inert'); else panel.setAttribute('inert', '');
  });
}
