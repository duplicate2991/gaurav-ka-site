// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create color particles
    createColorParticles();
    
    // Initialize countdown timer
    initCountdown();
    
    // Initialize color pots
    initColorPots();
    
    // Smooth scrolling for navigation links
    initSmoothScrolling();
});

// Create floating color particles
function createColorParticles() {
    const particlesContainer = document.querySelector('.color-particles');
    const colors = ['#FF5252', '#4CAF50', '#2196F3', '#FFC107', '#9C27B0', '#E91E63', '#FF9800'];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 15 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.6 + 0.2;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.transform = 'scale(0)';
        particle.style.transition = 'transform 0.5s ease, top 15s linear, left 15s linear';
        
        particlesContainer.appendChild(particle);
        
        // Animate the particle
        setTimeout(() => {
            particle.style.transform = 'scale(1)';
            animateParticle(particle);
        }, i * 100);
    }
}

// Animate a single particle
function animateParticle(particle) {
    setInterval(() => {
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
    }, 15000);
}

// Initialize countdown timer to Holi 2025 (March 14, 2025)
function initCountdown() {
    const holiDate = new Date('March 14, 2025 00:00:00').getTime();
    
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = holiDate - now;
        
        // If the date has passed, stop countdown
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        // Calculate days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

// Initialize color pots with click animations
function initColorPots() {
    const pots = document.querySelectorAll('.pot');
    
    pots.forEach(pot => {
        pot.addEventListener('click', function() {
            // Create splash effect
            createColorSplash(this);
            
            // Animate the pot
            this.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                this.style.transform = 'translateY(0)';
            }, 300);
        });
    });
}

// Create color splash effect when pot is clicked
function createColorSplash(pot) {
    const color = pot.getAttribute('data-color');
    const potRect = pot.getBoundingClientRect();
    const centerX = potRect.left + potRect.width / 2;
    const centerY = potRect.top + potRect.height / 2;
    
    // Create multiple color droplets
    for (let i = 0; i < 30; i++) {
        const droplet = document.createElement('div');
        const size = Math.random() * 15 + 5;
        const angle = Math.random() * Math.PI * 2; // Random angle in radians
        const distance = Math.random() * 150 + 50; // Random distance
        
        // Calculate the final position
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        // Style the droplet
        droplet.style.position = 'fixed';
        droplet.style.width = `${size}px`;
        droplet.style.height = `${size}px`;
        droplet.style.backgroundColor = color;
        droplet.style.borderRadius = '50%';
        droplet.style.zIndex = '1000';
        droplet.style.opacity = '0.8';
        droplet.style.left = `${centerX}px`;
        droplet.style.top = `${centerY}px`;
        droplet.style.transform = 'scale(0)';
        droplet.style.transition = `transform 0.2s ease, left 0.6s ease, top 0.6s ease, opacity 0.6s ease`;
        
        document.body.appendChild(droplet);
        
        // Animate the droplet
        setTimeout(() => {
            droplet.style.transform = 'scale(1)';
            droplet.style.left = `${endX}px`;
            droplet.style.top = `${endY}px`;
            
            setTimeout(() => {
                droplet.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(droplet);
                }, 600);
            }, 400);
        }, 10);
    }
    
    // Play splash sound
    playSound('splash');
}

// Play sound effect
function playSound(type) {
    // This is a placeholder for sound functionality
    // In a real implementation, you would create and play audio elements
    console.log(`Playing ${type} sound`);
}

// Initialize smooth scrolling for navigation links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add click event to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const eventsSection = document.querySelector('#events');
            if (eventsSection) {
                window.scrollTo({
                    top: eventsSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Add window scroll event for parallax effects
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.backgroundPosition = `center ${scrollPosition * 0.4}px`;
    }
    
    // Fade in elements as they come into view
    const fadeElements = document.querySelectorAll('.about-content, .gallery-item, .event-card');
    fadeElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize the page with some animations
window.addEventListener('load', function() {
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 500);
    }
    
    // Set initial state for fade elements
    const fadeElements = document.querySelectorAll('.about-content, .gallery-item, .event-card');
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
});