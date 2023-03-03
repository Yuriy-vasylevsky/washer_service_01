const menuBtnOpen = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile');
const body = document.querySelector('.body');
const btn = document.querySelector('.header__button');

menuBtnOpen.addEventListener('click', () => {
  const expanded = btn.getAttribute('aria-expanded') === 'true' || false;
  btn.setAttribute('aria-expanded', !expanded);
  menuBtnOpen.classList.toggle('is-open');
  mobileMenu.classList.toggle('is-hiden');
  body.classList.toggle('overflov');
});
