const carousels = document.querySelectorAll("[data-carousel]");

carousels.forEach((carousel) => {
  const slides = carousel.querySelectorAll(".slide");
  const previousButton = carousel.querySelector("[data-previous]");
  const nextButton = carousel.querySelector("[data-next]");
  const counter = carousel.querySelector("[data-counter]");

  let currentSlide = 0;

  function displaySlide(newSlideNumber) {
    slides[currentSlide].classList.remove("active");

    currentSlide =
      (newSlideNumber + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");

    counter.textContent =
      `${currentSlide + 1} of ${slides.length}`;
  }

  nextButton.addEventListener("click", () => {
    displaySlide(currentSlide + 1);
  });

  previousButton.addEventListener("click", () => {
    displaySlide(currentSlide - 1);
  });

  displaySlide(0);
});