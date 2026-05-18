/* ============================================================
   RISHI KUMAR KUSHWAHA — PORTFOLIO
   main.js  |  All interactive behaviours
   ============================================================ */

// ── Custom Cursor ──────────────────────────────────────────
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});

(function animCursor() {
  rx += (mx - rx) * 0.18;
  ry += (my - ry) * 0.18;
  cursor.style.left     = mx + 'px';
  cursor.style.top      = my + 'px';
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top  = ry + 'px';
  requestAnimationFrame(animCursor);
})();

document.querySelectorAll('a, button, .skill-card, .portfolio-item, .contact-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width       = '20px';
    cursor.style.height      = '20px';
    cursorRing.style.width   = '50px';
    cursorRing.style.height  = '50px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width       = '12px';
    cursor.style.height      = '12px';
    cursorRing.style.width   = '36px';
    cursorRing.style.height  = '36px';
  });
});

// ── Navbar scroll effect ───────────────────────────────────
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Scroll reveal ──────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
