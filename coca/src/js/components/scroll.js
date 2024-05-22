export const useScroll = () => {
  let lastScroll = 0;
  const defaultOffset = 5;
  const header = document.querySelector('.header');

  const scrollPosition = () => document.documentElement.scrollTop;
  const containShow = () => header.classList.contains('header--show');

  window.addEventListener('scroll', () => {
    if (scrollPosition() < lastScroll && !containShow() && scrollPosition() > defaultOffset) {
      header.classList.add('header--show');
    } else if (scrollPosition() > lastScroll && containShow()) {
      header.classList.remove('header--show');
    }
    lastScroll = scrollPosition();
  });
};
