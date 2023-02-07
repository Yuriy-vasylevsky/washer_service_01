const btnOpenMap = document.querySelector('.image-button');
const map = document.querySelector('.map-box');

btnOpenMap.addEventListener('click', () => {
  map.classList.toggle('is-hiden-non');
});
