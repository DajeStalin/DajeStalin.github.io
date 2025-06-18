// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav').querySelector('ul');

navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Create twinkling stars
const starCount = 50;
for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(star);
}

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox .close');

document.querySelectorAll('#gallery img, .slider img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.dataset.full || img.src;
        lightbox.classList.add('open');
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('open');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('open');
});

// Slider functionality
const slides = document.querySelector('.slides');
if (slides) {
    const images = slides.querySelectorAll('img');
    let current = 0;
    const nextBtn = document.querySelector('.slider .next');
    const prevBtn = document.querySelector('.slider .prev');

    function updateSlide() {
        slides.style.transform = `translateX(-${current * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        current = (current + 1) % images.length;
        updateSlide();
    });

    prevBtn.addEventListener('click', () => {
        current = (current - 1 + images.length) % images.length;
        updateSlide();
    });
}

