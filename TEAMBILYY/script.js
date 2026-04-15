function startSlider() {
  let slides = document.querySelectorAll(".slaidy");
  let index = 0;

  function showSlide() {
    // скрыть все
    slides.forEach(slide => slide.style.display = "none");

    // показать текущий
    slides[index].style.display = "block";

    // следующий индекс
    index++;
    if (index >= slides.length) {
      index = 0;
    }
  }

  // запуск сразу
  showSlide();

  // менять каждые 3 секунды
  setInterval(showSlide, 3000);
}

// запуск функции
startSlider();