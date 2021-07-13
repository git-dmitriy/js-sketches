document.addEventListener('DOMContentLoaded', () => {
  const menuBars = document.querySelector('#menu-bars');
  const overlay = document.querySelector('#overlay');
  const nav = document.querySelector('.nav');

  const toggleNav = () => {
    menuBars.classList.toggle('open');
    overlay.classList.toggle('overlay-slide-right');
  };

  const closeNav = (e) => {
    if (e.target.className === 'nav-link') toggleNav();
  };

  menuBars.addEventListener('click', toggleNav);
  nav.addEventListener('click', closeNav);
});
