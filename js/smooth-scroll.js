'use strict';

/* ==========================================================================
   smooth-scroll.js — Smooth navigation + active nav link tracking
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initActiveNavTracking();
});

/* --------------------------------------------------------------------------
   Smooth Scroll — Programmatic fallback
   CSS handles scroll-behavior: smooth (set in main.css on html).
   This JS fallback handles edge cases and offset calculations.
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  const headerHeight = getHeaderHeight();

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();

      const targetTop = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    });
  });
}

/* --------------------------------------------------------------------------
   Active Nav Link Tracking — IntersectionObserver
   Watches all sections and marks the matching nav link as .active
   -------------------------------------------------------------------------- */
function initActiveNavTracking() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  const headerHeight = getHeaderHeight();

  /* Build a Map: sectionId → navLink element */
  const linkMap = new Map();
  navLinks.forEach(link => {
    const id = link.getAttribute('href').slice(1); // strip #
    linkMap.set(id, link);
  });

  function setActive(id) {
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = linkMap.get(id);
    if (activeLink) activeLink.classList.add('active');
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      /* Offset: top edge shrunk by header height + 10px; bottom edge at 40% from top */
      rootMargin: `-${headerHeight + 10}px 0px -40% 0px`,
      threshold: 0,
    }
  );

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   Helper: Get current header height
   -------------------------------------------------------------------------- */
function getHeaderHeight() {
  const header = document.getElementById('header');
  if (header) return header.offsetHeight;

  /* Fallback: read CSS custom property */
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue('--header-height')
    .trim();
  return parseInt(raw) || 70;
}
