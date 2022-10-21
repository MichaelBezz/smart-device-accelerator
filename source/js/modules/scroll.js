const smoothLinks = document.querySelectorAll('a[href^="#"]');

export const createSmoothScroll = () => {
  [...smoothLinks].forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const id = link.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
};
