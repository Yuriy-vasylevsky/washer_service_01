import '../sass/main.scss';
import './mobile-menu';

$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });
});
