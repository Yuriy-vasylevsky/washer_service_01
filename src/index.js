import './sass/main.scss';
import './js/mobile-menu';

const faqList = document.querySelector('.faq__list');
faqList.addEventListener('click', openAnsver);

let faqAnsver = null;
let ansverindex = null;

function openAnsver(e) {
  clickOnSvg(e);
  findElToOpen(e);
  openFindEl(e);
}

function clickOnSvg(e) {
  if ('use' !== e.target.nodeName && 'svg' !== e.target.nodeName) {
    return;
  } else {
    ansverindex = e.target.dataset.index;
  }
}

function findElToOpen(e) {
  faqAnsver = document.querySelector(`#p-${ansverindex}`);
  return faqAnsver;
}

function openFindEl(e) {
  if ('use' !== e.target.nodeName && 'svg' !== e.target.nodeName) {
    return;
  } else {
    faqAnsver.classList.toggle('is-open');
  }
}
