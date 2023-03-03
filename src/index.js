import './sass/main.scss';
import './js/mobile-menu';
import './js/slick';

const faqList = document.querySelector('.faq__list');
console.log('faqList', faqList);
const faqAnswers = document.querySelectorAll('.faq__ansver');
console.log('faqAnswers', faqAnswers);

faqList.addEventListener('click', handleFaqClick);

function handleFaqClick(e) {
  const targetSvg = e.target;

  switch (targetSvg.tagName) {
    case 'H3':
      let currentSvg = targetSvg.nextElementSibling.querySelector('svg');
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
