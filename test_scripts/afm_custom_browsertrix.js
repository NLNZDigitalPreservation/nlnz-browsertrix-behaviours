document.querySelectorAll("img").forEach(img => {
  if (img.dataset.src) {
    img.src = img.dataset.src;
  }
});