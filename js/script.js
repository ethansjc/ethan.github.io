// PhotoSwipe
initPhotoSwipeFromDOM(".js-my-gallery");

$(function () {
  
window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({ 
  top: 100, // could be negative value
  left: 0, 
  behavior: 'smooth' 
});
document.querySelector('.html').scrollIntoView({ 
  behavior: 'smooth' 
});
});

function scrollToTop() {
  window.scrollTo(0, 0);
}