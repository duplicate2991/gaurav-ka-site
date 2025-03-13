/* Base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: #f5f5f5;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
}

.container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
}

.content {
    text-align: center;
    z-index: 10;
    padding: 2rem;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    max-width: 90%;
}

/* Happy Holi Text Animation */
.holi-text {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.letter {
    display: inline-block;
    margin: 0 5px;
    animation: bounce 2s infinite alternate;
}

.space {
    width: 15px;
}

/* Each letter has a different color and animation delay */
.letter:nth-child(1) {
    color: #FF5252; /* Red */
    animation-delay: 0s;
}
.letter:nth-child(2) {
    color: #FFC107; /* Yellow */
    animation-delay: 0.1s;
}
.letter:nth-child(3) {
    color: #4CAF50; /* Green */
    animation-delay: 0.2s;
}
.letter:nth-child(4) {
    color: #2196F3; /* Blue */
    animation-delay: 0.3s;
}
.letter:nth-child(5) {
    color: #9C27B0; /* Purple */
    animation-delay: 0.4s;
}
.letter:nth-child(7) {
    color: #E91E63; /* Pink */
    animation-delay: 0.5s;
}
.letter:nth-child(8) {
    color: #FF9800; /* Orange */
    animation-delay: 0.6s;
}
.letter:nth-child(9) {
    color: #00BCD4; /* Cyan */
    animation-delay: 0.7s;
}
.letter:nth-child(10) {
    color: #8BC34A; /* Light Green */
    animation-delay: 0.8s;
}
.letter:nth-child(11) {
    color: #FF5252; /* Red */
    animation-delay: 0s;
}
.letter:nth-child(12) {
    color: #FFC107; /* Yellow */
    animation-delay: 0.1s;
}
.letter:nth-child(13) {
    color: #4CAF50; /* Green */
    animation-delay: 0.2s;
}
.letter:nth-child(14) {
    color: #2196F3; /* Blue */
    animation-delay: 0.3s;
}


/* Reveal Button */
.reveal-btn {
    padding: 15px 30px;
    font-size: 1.2rem;
    font-weight: 700;
    background: linear-gradient(45deg, #FF5252, #9C27B0);
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.reveal-btn:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #9C27B0, #FF5252);
    transition: left 0.3s ease;
    z-index: -1;
}

.reveal-btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.reveal-btn:hover:before {
    left: 0;
}

/* Secret Message */
.secret-message {
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    position: relative;
    padding: 2rem;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.secret-message.visible {
    opacity: 1;
    transform: translateY(0);
}

.secret-message p {
    position: relative;
    z-index: 2;
    background: linear-gradient(45deg, #FF5252, #FFC107, #4CAF50, #2196F3, #9C27B0);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: colorShift 5s infinite alternate;
}

/* Spray Container */
.spray-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

/* Animation Container */
.animation-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
}

/* Color Powder */
.color-powder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* Balloon */
.balloon {
    position: absolute;
    width: 40px;
    height: 50px;
    border-radius: 50%;
    animation: float 15s linear infinite;
    opacity: 0.8;
}

.balloon:before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 15px;
    background-color: rgba(0, 0, 0, 0.3);
}

/* Water Ball */
.water-ball {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    animation: float 10s linear infinite;
    opacity: 0.7;
}

/* Spray Particle */
.spray-particle {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    opacity: 0.8;
    animation: spray 1s forwards;
}

/* Burst Particle */
.burst-particle {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0.8;
    animation: burst 1s forwards;
}

/* Animations */
@keyframes bounce {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}

@keyframes colorShift {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}

@keyframes float {
    0% {
        transform: translateY(110vh) scale(1);
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(-50px) scale(0.5);
        opacity: 0;
    }
}

@keyframes spray {
    0% {
        transform: translate(0, 0) scale(0);
        opacity: 0.8;
    }
    100% {
        transform: translate(var(--tx), var(--ty)) scale(1);
        opacity: 0;
    }
}

@keyframes burst {
    0% {
        transform: translate(0, 0) scale(1);
        opacity: 0.8;
    }
    100% {
        transform: translate(var(--tx), var(--ty)) scale(0);
        opacity: 0;
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .holi-text {
        font-size: 3rem;
    }
    
    .secret-message {
        font-size: 1.2rem;
        padding: 1.5rem;
    }
    
    .reveal-btn {
        padding: 12px 24px;
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    .holi-text {
        font-size: 2rem;
    }
    
    .secret-message {
        font-size: 1rem;
        padding: 1rem;
    }
    
    .content {
        padding: 1.5rem;
    }
}
