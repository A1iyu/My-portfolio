/* Scroll reveal: cards and content fade in as they enter the screen.
   Works on every page; call initReveal() again after adding content with JavaScript. */
(function () {
  var SELECTORS = [
    '.hero-intro', '.profile-frame', '.terminal-wrapper',
    '.stat-card', '.section-header', '.about-chips', '.pillar-item',
    '.timeline-item', '.project-card', '.cert-card',
    '.contact-banner-card', '.contact-hub-card', '.site-footer',
    '.back-link', '.details-hero',
    '.story-intro', '.story-group', '.story', '.story-outro', '.gallery-heading', '.gallery-item'
  ].join(',');

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var io = null;

  function reveal(el) {
    el.classList.add('reveal-in');
    // remove the reveal classes afterwards so normal hover effects work again
    setTimeout(function () { el.classList.remove('reveal', 'reveal-in'); el.style.transitionDelay = ''; }, 1200);
  }

  window.initReveal = function () {
    if (reduce || !('IntersectionObserver' in window)) return;
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { io.unobserve(e.target); reveal(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    }
    var items = document.querySelectorAll(SELECTORS);
    Array.prototype.forEach.call(items, function (el) {
      if (el.dataset.revealInit) return;
      if (el.closest('.journey-panel')) return;           // About story has its own open animation
      el.dataset.revealInit = '1';
      // small stagger between siblings that appear together
      var sibs = el.parentElement ? Array.prototype.filter.call(el.parentElement.children, function (c) { return c.matches(SELECTORS); }) : [];
      var i = Math.max(0, sibs.indexOf(el));
      el.style.transitionDelay = Math.min(i, 5) * 70 + 'ms';
      el.classList.add('reveal');
      io.observe(el);
    });
  };

  document.addEventListener('DOMContentLoaded', window.initReveal);
})();
