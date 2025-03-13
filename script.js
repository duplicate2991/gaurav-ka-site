document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const revealBtn = document.getElementById('reveal-btn');
    const secretMessage = document.getElementById('secret-message');
    const sprayContainer = document.querySelector('.spray-container');
    const animationContainer = document.querySelector('.animation-container');
    
    // Initialize background animations
    createBackgroundElements();
    
    // Reveal button click event
    revealBtn.addEventListener('click', function() {
        // Show the secret message
        secretMessage.classList.add('visible');
        
        // Create spray animation
        createSprayAnimation(sprayContainer);
        
        // Add more color powder when revealing the message
        createColorPowder(50);
    });
    
    // Create background animations
    function createBackgroundElements() {
        // Create initial color powder
        createColorPowder(30);
        
        // Create balloons and water balls
        createBalloons(15);
        createWaterBalls(15);
        
        // Set interval to create bursting animations
        setInterval(function() {
            createBurst();
        }, 1000);
    }
    
    // Create color powder particles
    function createColorPowder(count) {
        const colorPowder = document.querySelector('.color-powder');
        const colors = ['#FF5252', '#FFC107', '#4CAF50', '#2196F3', '#9C27B0', '#E91E63', '#FF9800', '#00BCD4'];
        
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 10 + 5;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particle.style.position = 'absolute';
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = color;
            particle.style.borderRadius = '50%';
            particle.style.opacity = Math.random() * 0.5 + 0.2;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.transform = 'scale(0)';
            particle.style.transition = 'transform 0.5s ease, top 20s linear, left 20s linear';
            
            colorPowder.appendChild(particle);
            
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
        }, 20000);
    }
    
    // Create balloons
    function createBalloons(count) {
        const colors = ['#FF5252', '#FFC107', '#4CAF50', '#2196F3', '#9C27B0', '#E91E63', '#FF9800'];
        
        for (let i = 0; i < count; i++) {
            const balloon = document.createElement('div');
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 30 + 30;
            const left = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = Math.random() * 10 + 10;
            
            balloon.className = 'balloon';
            balloon.style.backgroundColor = color;
            balloon.style.width = `${size}px`;
            balloon.style.height = `${size * 1.2}px`;
            balloon.style.left = `${left}%`;
            balloon.style.animationDuration = `${duration}s`;
            balloon.style.animationDelay = `${delay}s`;
            
            animationContainer.appendChild(balloon);
            
            // Set timeout to remove and recreate balloon
            setTimeout(() => {
                if (balloon.parentNode) {
                    animationContainer.removeChild(balloon);
                    createBalloons(1);
                }
            }, (duration + delay) * 1000);
        }
    }
    
    // Create water balls
    function createWaterBalls(count) {
        const colors = ['rgba(33, 150, 243, 0.7)', 'rgba(0, 188, 212, 0.7)', 'rgba(76, 175, 80, 0.7)', 'rgba(156, 39, 176, 0.7)'];
        
        for (let i = 0; i < count; i++) {
            const waterBall = document.createElement('div');
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 20 + 20;
            const left = Math.random() * 100;
            const delay = Math.random() * 10;
            const duration = Math.random() * 8 + 7;
            
            waterBall.className = 'water-ball';
            waterBall.style.backgroundColor = color;
            waterBall.style.width = `${size}px`;
            waterBall.style.height = `${size}px`;
            waterBall.style.left = `${left}%`;
            waterBall.style.animationDuration = `${duration}s`;
            waterBall.style.animationDelay = `${delay}s`;
            
            animationContainer.appendChild(waterBall);
            
            // Set timeout to remove and recreate water ball
            setTimeout(() => {
                if (waterBall.parentNode) {
                    animationContainer.removeChild(waterBall);
                    createWaterBalls(1);
                }
            }, (duration + delay) * 1000);
        }
    }
    
    // Create spray animation
    function createSprayAnimation(container) {
        const colors = ['#FF5252', '#FFC107', '#4CAF50', '#2196F3', '#9C27B0', '#E91E63', '#FF9800'];
        const particleCount = 100;
        
        // Clear previous spray
        container.innerHTML = '';
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 8 + 4;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 150 + 50;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            particle.className = 'spray-particle';
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = color;
            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);
            
            container.appendChild(particle);
        }
    }
    
    // Create burst animation
    function createBurst() {
        const colors = ['#FF5252', '#FFC107', '#4CAF50', '#2196F3', '#9C27B0', '#E91E63', '#FF9800'];
        const particleCount = 30;
        const burstX = Math.random() * window.innerWidth;
        const burstY = Math.random() * window.innerHeight;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 10 + 5;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 100 + 30;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            particle.className = 'burst-particle';
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = color;
            particle.style.left = `${burstX}px`;
            particle.style.top = `${burstY}px`;
            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);
            
            animationContainer.appendChild(particle);
            
            // Remove particle after animation completes
            setTimeout(() => {
                if (particle.parentNode) {
                    animationContainer.removeChild(particle);
                }
            }, 1000);
        }
    }
});
