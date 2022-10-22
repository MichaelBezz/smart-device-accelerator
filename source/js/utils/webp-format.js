export const checkWebpFormat = () => {
  const webP = new Image();
  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

  webP.onload = webP.onerror = () => {
    if (webP.height === 2) {
      document.body.classList.add('js-webp');
    } else {
      document.body.classList.add('js-webp-exception');
    }
  };
};
