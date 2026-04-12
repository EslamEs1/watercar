(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initAccordion() {
    var section = document.getElementById('faq');
    if (!section) return;

    var details = section.querySelectorAll('details');
    if (!details.length) return;

    details.forEach(function (detail) {
      detail.addEventListener('toggle', function () {
        if (detail.open) {
          details.forEach(function (other) {
            if (other !== detail && other.open) {
              other.removeAttribute('open');
              var otherGrid = other.querySelector('[style*="grid-template-rows"]');
              if (otherGrid) otherGrid.style.gridTemplateRows = '0fr';
            }
          });
        }

        var grid = detail.querySelector('[style*="grid-template-rows"]');
        if (grid) {
          if (prefersReducedMotion) {
            grid.style.transition = 'none';
          }
          grid.style.gridTemplateRows = detail.open ? '1fr' : '0fr';
        }
      });

      var summary = detail.querySelector('summary');
      if (summary) {
        summary.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            detail.open = !detail.open;
            detail.dispatchEvent(new Event('toggle'));
          }
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccordion);
  } else {
    initAccordion();
  }
})();
