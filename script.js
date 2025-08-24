window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const boxes = document.querySelectorAll('.loader-box');
  let current = 0;

  // Show first box
  boxes[current].style.display = 'block';

  // Cycle through boxes every 100ms
  const interval = setInterval(() => {
    boxes[current].style.display = 'none';
    current = (current + 1) % boxes.length;
    boxes[current].style.display = 'block';
  }, 200);

  // After 2 seconds, swipe up and stop cycling
  setTimeout(() => {
    clearInterval(interval);
    preloader.classList.add('swipe-up');

    preloader.addEventListener('animationend', () => {
      preloader.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  }, 1000); // Adjust total preloader duration here
});

// SUBCHAPTER BUTTONS
document.addEventListener('DOMContentLoaded', function() {
    const subChapterItems = document.querySelectorAll('.sub-chapters li');
    subChapterItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            const link = this.querySelector('a');
            if (link && event.target !== link) {
                event.preventDefault();
                if (link.href) {
                    window.location.href = link.href;
                }
            }
        });
        item.classList.add('clickable');
    });
});
// CONTACT SCROLLSPY
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("#footer");
  const contactLink = document.querySelector('nav a[href="#footer"]');

  // Watch when footer enters viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactLink.classList.add("scrollspy-active");
      } else {
        contactLink.classList.remove("scrollspy-active");
      }
    });
  }, { threshold: 0.3 }); 

  if (footer) {
    observer.observe(footer);
  }

  // Also add highlight when clicked
  contactLink.addEventListener("click", () => {
    contactLink.classList.add("scrollspy-active");
  });
});