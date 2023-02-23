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

$(document).ready(function () {
  $('.advances__list').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,

    prevArrow:
      '<button type="button" class="slick-prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          // dots: true,
          adaptiveHeight: true,
        },
      },
    ],
  });
});
