import './sass/main.scss';
import './js/mobile-menu';

const faqBtnOpen = document.querySelectorAll('.faq__icon');
const faqAnsver = document.querySelectorAll('.faq__ansver');
console.log('faqAnsver', faqAnsver);
console.log('faqBtnOpen', faqBtnOpen);

faqBtnOpen[0].addEventListener('click', () => {
  faqAnsver[0].classList.toggle('is-hiden-non');
  console.log('faqAnsver', faqAnsver[0]);
});

faqBtnOpen[1].addEventListener('click', () => {
  faqAnsver[1].classList.toggle('is-hiden-non');
});

faqBtnOpen[2].addEventListener('click', () => {
  faqAnsver[2].classList.toggle('is-hiden-non');
});

faqBtnOpen[3].addEventListener('click', () => {
  faqAnsver[3].classList.toggle('is-hiden-non');
});
