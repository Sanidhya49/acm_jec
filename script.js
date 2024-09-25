const slides = document.querySelectorAll('.testimonial-slide');
const navDots = document.querySelectorAll('.slider-nav span');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'previous');
        if (i === index) {
            slide.classList.add('active');
        } else if (i === (index - 1 + slides.length) % slides.length) {
            slide.classList.add('previous');
        }
    });

    navDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Auto-slide every 7 seconds
setInterval(nextSlide, 7000);

// Initialize
showSlide(0);

// Add click events to nav dots
navDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
    });
});

// Set initial height of slider
function setSliderHeight() {
    const slider = document.querySelector('.testimonial-slider');
    const activeSlide = document.querySelector('.testimonial-slide.active');
    if (activeSlide) {
        slider.style.height = `${activeSlide.offsetHeight}px`;
    }
}

// Call setSliderHeight on load and resize
window.addEventListener('load', setSliderHeight);
window.addEventListener('resize', setSliderHeight);
