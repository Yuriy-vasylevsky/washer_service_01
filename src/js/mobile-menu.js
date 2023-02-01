const menuBtnOpen = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile');
const menuBtnClose = document.querySelector('.mobile');

menuBtnOpen.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-hiden');
});

menuBtnClose.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-hiden');
});
