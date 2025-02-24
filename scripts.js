let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  // Hide all slides
  slides.forEach((slide, index) => {
    slide.style.opacity = 0;
  });

  // Show the current slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // Reset to the first slide if we reach the end
  }

  slides[slideIndex - 1].style.opacity = 1;

  // Call showSlides every 5 seconds
  setTimeout(showSlides, 3000);
}

// Start the slideshow
showSlides();
