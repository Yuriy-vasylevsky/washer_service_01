const btnOpenMap = document.querySelector('.image-button');
const map = document.querySelector('.map-box');

btnOpenMap.addEventListener('click', handelClickBtn);

function handelClickBtn(e) {
  const isOpen = btnOpenMap.dataset.open === 'true';
  isOpen ? closeMap(e) : openMap(e);
}

function openMap(e) {
  console.log('отрабртал опен');
  btnOpenMap.textContent = 'Приховати карту';
  map.classList.remove('is-hiden-non');
  btnOpenMap.dataset.open = 'true';
}

function closeMap(e) {
  console.log('отрабртал клоуз');
  btnOpenMap.textContent = 'Показати карту';
  map.classList.add('is-hiden-non');
  btnOpenMap.dataset.open = 'false';
}
