import Swiper from 'swiper';
import 'swiper/css/bundle';

const aboutLeftArrow = document.getElementById('aboutLeftArrow');
const aboutRightArrow = document.getElementById('aboutRightArrow');
const aboutDots = document.querySelectorAll('.about-dot');

let aboutSwiper;

aboutSwiper = new Swiper('.about-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 32,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  breakpoints: {
    1440: {
      centeredSlides: false,
      slidesPerView: 3,
      grabCursor: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
  on: {
    init: () => {
      document.querySelector('.about-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateAboutArrows(this);
      updateAboutDots(this.realIndex);
    },
  },
});

function updateAboutArrows(swiper) {
  aboutLeftArrow.disabled = swiper.isBeginning;
  aboutRightArrow.disabled = swiper.isEnd;
}

aboutLeftArrow.addEventListener('click', () => {
  aboutSwiper.slidePrev();
});

aboutRightArrow.addEventListener('click', () => {
  aboutSwiper.slideNext();
});

function updateAboutDots(index) {
  aboutDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

aboutDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    aboutSwiper.slideTo(index);
  });
});
