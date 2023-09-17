document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 3; // 3 is the number of slides
        updateSlider();
    }

    function updateSlider() {
        const translateValue = -currentIndex * 100;
        slider.style.transform = `translateX(${translateValue}%)`;
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});
