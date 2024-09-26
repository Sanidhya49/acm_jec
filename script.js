// --------------for typed-cursor-text----------------
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Innovation", "Networking", "Research"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// --------for testimonials------------
const slides = document.querySelectorAll('.testimonial-slide');
const navDots = document.querySelectorAll('.slider-nav span');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
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

//------------js for counting [goals]--------------
// Function to animate the counter
const counters = document.querySelectorAll('.counter');
const speed = 50; // Adjust this to make it count faster or slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target'); // Get target number
        const count = +counter.innerText; // Current number in the counter
        
        const increment = target / speed; // Divide target by speed to calculate the increment
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment); // Increase the counter
            setTimeout(updateCount, 30); // Call the function every 30ms
        } else {
            counter.innerText = target; // Make sure the final value is exactly the target
        }
    };
    
    updateCount(); // Start the counter animation
});

