const smoothLinks = document.querySelectorAll('a[href^="#"]');

export const createSmoothScroll = () => {
  if (smoothLinks.length) {
    [...smoothLinks].forEach((link) => {
      const id = link.getAttribute('href');

      if (id.length > 1) {
        const targetBlock = document.querySelector(id);

        if (targetBlock) {
          link.addEventListener('click', (event) => {
            event.preventDefault();

            targetBlock.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          });
        }
      }
    });
  }
};
