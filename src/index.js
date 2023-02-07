import './sass/main.scss';
import './js/mobile-menu';

const faqList = document.querySelector('.faq__list');
faqList.addEventListener('click', openAnsver);

let faqAnsver = null;
let ansverIndex = null;
let selectSvg = null;
console.log('selectSvg', selectSvg);

function openAnsver(e) {
  clickOnSvg(e);
  findElToOpen(e);
  openFindEl(e);
  togleSvg(e);
}

function clickOnSvg(e) {
  if ('use' !== e.target.nodeName && 'svg' !== e.target.nodeName) {
    return;
  } else {
    selectSvg = e.target;
    console.log('selectSvg', selectSvg);

    ansverIndex = e.target.dataset.index;
    return selectSvg;
  }
}

function findElToOpen(e) {
  faqAnsver = document.querySelector(`#p-${ansverIndex}`);
  return faqAnsver;
}

function openFindEl(e) {
  if ('use' !== e.target.nodeName && 'svg' !== e.target.nodeName) {
    return;
  } else {
    faqAnsver.classList.toggle('is-open');
  }
}

function togleSvg(e) {
  if ('svg' !== e.target.nodeName) {
    return;
  } else {
    selectSvg.classList.toggle('is-open');
  }
}
