const menuBtnOpen = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile');
const body = document.querySelector('.body');

menuBtnOpen.addEventListener('click', () => {
  menuBtnOpen.classList.toggle('is-open');
  mobileMenu.classList.toggle('is-hiden');
  body.classList.toggle('overflov');
});

// menuBtnOpen.addEventListener('click', () => {
//   menuBtnOpen.classList.toggle('is-open');
//   mobileMenu.classList.toggle('is-hiden');
//   body.classList.toggle('overflov');
// });
