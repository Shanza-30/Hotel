// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize Bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Room card animation on scroll
function animateOnScroll() {
    const roomCards = document.querySelectorAll('.room-card');
    roomCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (cardPosition < screenPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animation
document.querySelectorAll('.room-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form validation
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    
    const name = this.querySelector('input[type="text"]');
    const email = this.querySelector('input[type="email"]');
    const message = this.querySelector('textarea');
    
    if(name.value.trim() === '') {
        valid = false;
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
    
    if(email.value.trim() === '' || !email.value.includes('@')) {
        valid = false;
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
    
    if(message.value.trim() === '') {
        valid = false;
        message.classList.add('is-invalid');
    } else {
        message.classList.remove('is-invalid');
    }
    
    if(valid) {
        alert('Thank you for your message! We will contact you soon.');
        this.reset();
    }
});