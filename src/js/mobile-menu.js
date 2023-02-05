const menuBtnOpen = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile');
const menuBtnClose = document.querySelector('.mobile');
const body = document.querySelector('.body');

menuBtnOpen.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-hiden');
  body.classList.toggle('overflov');
});

menuBtnClose.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-hiden');
  body.classList.toggle('overflov');
});
