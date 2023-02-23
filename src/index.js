import './sass/main.scss';
import './js/mobile-menu';

// const faqList = document.querySelector('.faq__list');
// faqList.addEventListener('click', openAnsver);

// let faqAnsver = null;
// let ansverIndex = null;
// let selectSvg = null;
// console.log('selectSvg', selectSvg);

// function openAnsver(e) {
//   clickOnSvg(e);
//   clickOnHeader(e);
//   findElToOpen(e);
//   openFindEl(e);
//   togleSvg(e);
// }

// function clickOnSvg(e) {
//   if ('use' !== e.target.nodeName && 'svg' !== e.target.nodeName) {
//     return;
//   } else {
//     selectSvg = e.target;
//     ansverIndex = e.target.dataset.index;
//     // return selectSvg;
//   }
// }

// function clickOnHeader(e) {
//   if ('H3' !== e.target.nodeName) {
//     return;
//   } else {
//     selectSvg = e.target;

//     ansverIndex = e.target.dataset.index;

//     return selectSvg;
//   }
// }

// function findElToOpen(e) {
//   faqAnsver = document.querySelector(`#p-${ansverIndex}`);

//   console.log('faqAnsver', faqAnsver);
//   return faqAnsver;
// }

// function openFindEl(e) {
//   if ('H3' !== e.target.nodeName && 'svg' !== e.target.nodeName) {
//     return;
//   } else {
//     faqAnsver.classList.toggle('is-open');
//   }
// }

// function togleSvg(e) {
//   if ('svg' !== e.target.nodeName) {
//     return;
//   } else {
//     selectSvg.classList.toggle('is-open');
//   }
// }

const faqList = document.querySelector('.faq__list');
console.log('faqList', faqList);
const faqAnswers = document.querySelectorAll('.faq__ansver');
console.log('faqAnswers', faqAnswers);

faqList.addEventListener('click', handleFaqClick);

function handleFaqClick(e) {
  const targetSvg = e.target;
  const currentSvg = e.target.nextElementSibling;
  switch (targetSvg.tagName) {
    case 'H3':
      toggleAnswer(targetSvg.dataset.index);
      toggleSvg(currentSvg);
      break;

    case 'svg':
      toggleAnswer(targetSvg.dataset.index);
      toggleSvg(targetSvg);
      break;
  }
}

function toggleAnswer(index) {
  const answer = faqAnswers[index];
  answer.classList.toggle('is-open');
}

function toggleSvg(svg) {
  svg.classList.toggle('is-open');
}

// $('.slider').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   adaptiveHeight: true,
// });
