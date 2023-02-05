import './sass/main.scss';
import './js/mobile-menu';

const faqList = document.querySelector('.faq__list');

faqList.addEventListener('click', openAnsver);

let faqAnsver = null;
console.log('faqAnsver', faqAnsver);
let ansverindex = null;

function findElToOpen(e) {
  let faqAnsver = document.querySelector(`#p-${ansverindex}`);

  if ('use' !== e.target.nodeName && 'svg' !== e.target.nodeName) {
    return;
  } else {
    faqAnsver.classList.toggle('is-hiden-non');
  }
}

function clickOnSvg(e) {
  if ('use' !== e.target.nodeName && 'svg' !== e.target.nodeName) {
    return;
  } else {
    ansverindex = e.target.dataset.index;
  }
}

function openAnsver(e) {
  clickOnSvg(e);
  findElToOpen(e);
}
