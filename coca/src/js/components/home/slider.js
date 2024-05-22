import Swiper from 'swiper';
import { Autoplay, Navigation, Scrollbar, EffectFade } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-fade';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    modules: [Scrollbar],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    scrollbar: {
      el: '.insight__slider-scrollbar',
      horizontalClass: '.insight__slider-scrollbar',
      draggable: true,
      dragClass: 'insight__slider-scrollbar-drag',
      dragSize: 100,
    },
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation, EffectFade],
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 22,
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  });
};

export const usePartnersSlider = () => {
  new Swiper('.partners__slider', {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
    },
  });
};
