// nav.js
(() => {
  const btn       = document.querySelector('.nav__toggle-menu');
  const linksWrap = document.querySelector('.nav__links');
  const listItems = linksWrap.querySelectorAll('li');

  function openMenu() {
    // 1) clear any old inline height so scrollHeight is accurate
    linksWrap.style.removeProperty('height');
    const maxH = linksWrap.scrollHeight;

    // 2) toggle classes & attrs
    btn.classList.add('toggle');
    linksWrap.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');

    // 3) drive the slide-down
    linksWrap.style.height = maxH + 'px';

    // 4) staggered fade-ins via CSS var + class
    listItems.forEach((li, i) => {
      li.style.setProperty('--delay', `${i * 0.05 + 0.15}s`);
      li.classList.add('fade-in');
    });
  }

  function closeMenu() {
    btn.classList.remove('toggle');
    linksWrap.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');

    // collapsing simply means drop the inline height
    linksWrap.style.removeProperty('height');
    listItems.forEach(li => li.classList.remove('fade-in'));
  }

  btn.addEventListener('click', () =>
    btn.classList.contains('toggle') ? closeMenu() : openMenu()
  );

  // if you cross desktop breakpoint, force-close
  window.matchMedia('(min-width:1024px)')
        .addEventListener('change', e => e.matches && closeMenu());
})();