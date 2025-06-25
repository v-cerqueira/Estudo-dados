// Advanced Animations JavaScript

class AnimationManager {
    constructor() {
        this.animations = new Map();
        this.observers = new Map();
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupParallaxEffects();
        this.setupParticleSystem();
        this.setupScrollAnimations();
        this.setupHoverEffects();
    }

    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, options);

        // Observe elements with animation classes
        document.querySelectorAll('[data-aos]').forEach(element => {
            observer.observe(element);
        });
    }

    animateElement(element) {
        const animationType = element.getAttribute('data-aos');
        const delay = element.getAttribute('data-aos-delay') || 0;

        setTimeout(() => {
            element.classList.add('animated', animationType);
        }, delay);
    }

    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-speed') || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    setupParticleSystem() {
        const particleContainer = document.querySelector('.hero-particles');
        if (!particleContainer) return;

        const particleCount = 30;
        const particles = [];

        for (let i = 0; i < particleCount; i++) {
            const particle = this.createParticle();
            particleContainer.appendChild(particle);
            particles.push(particle);
        }

        this.animateParticles(particles);
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        
        return particle;
    }

    animateParticles(particles) {
        particles.forEach(particle => {
            setInterval(() => {
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                particle.style.left = x + '%';
                particle.style.top = y + '%';
            }, Math.random() * 5000 + 3000);
        });
    }

    setupScrollAnimations() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const elements = section.querySelectorAll('.animate-on-scroll');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, { threshold: 0.3 });

            elements.forEach(element => observer.observe(element));
        });
    }

    setupHoverEffects() {
        // Add hover effects to cards
        document.querySelectorAll('.concept-card, .exercise-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.addHoverEffect(card);
            });
            
            card.addEventListener('mouseleave', () => {
                this.removeHoverEffect(card);
            });
        });

        // Add glow effect to buttons
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('mouseenter', () => {
                this.addGlowEffect(button);
            });
        });
    }

    addHoverEffect(element) {
        element.style.transform = 'translateY(-10px) scale(1.02)';
        element.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.3)';
    }

    removeHoverEffect(element) {
        element.style.transform = 'translateY(0) scale(1)';
        element.style.boxShadow = 'none';
    }

    addGlowEffect(element) {
        element.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.5)';
        setTimeout(() => {
            element.style.boxShadow = '';
        }, 1000);
    }
}

// Text Animation Class
class TextAnimator {
    constructor() {
        this.init();
    }

    init() {
        this.setupTypingEffects();
        this.setupTextReveal();
    }

    setupTypingEffects() {
        const typingElements = document.querySelectorAll('.typing-effect');
        
        typingElements.forEach(element => {
            const text = element.getAttribute('data-text') || element.textContent;
            this.typeText(element, text);
        });
    }

    typeText(element, text, speed = 100) {
        element.textContent = '';
        element.style.borderRight = '2px solid var(--primary-color)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                element.style.borderRight = 'none';
            }
        };
        
        typeWriter();
    }

    setupTextReveal() {
        const textElements = document.querySelectorAll('.text-reveal');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        });

        textElements.forEach(element => observer.observe(element));
    }
}

// Morphing Animation Class
class MorphAnimator {
    constructor() {
        this.init();
    }

    init() {
        this.setupMorphingShapes();
    }

    setupMorphingShapes() {
        const morphElements = document.querySelectorAll('.morph');
        
        morphElements.forEach(element => {
            this.animateMorph(element);
        });
    }

    animateMorph(element) {
        const keyframes = [
            { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
            { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
            { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }
        ];

        element.animate(keyframes, {
            duration: 4000,
            iterations: Infinity,
            easing: 'ease-in-out'
        });
    }
}

// Loading Animation Class
class LoadingAnimator {
    constructor() {
        this.init();
    }

    init() {
        this.setupLoadingAnimations();
    }

    setupLoadingAnimations() {
        const loadingElements = document.querySelectorAll('.loading-animation');
        
        loadingElements.forEach(element => {
            this.createLoadingAnimation(element);
        });
    }

    createLoadingAnimation(element) {
        const dots = element.querySelectorAll('.dot');
        
        dots.forEach((dot, index) => {
            dot.style.animationDelay = `${index * 0.2}s`;
        });
    }
}

// Glitch Effect Class
class GlitchEffect {
    constructor() {
        this.init();
    }

    init() {
        this.setupGlitchEffects();
    }

    setupGlitchEffects() {
        const glitchElements = document.querySelectorAll('.glitch');
        
        glitchElements.forEach(element => {
            const text = element.textContent;
            element.setAttribute('data-text', text);
            
            // Create glitch layers
            this.createGlitchLayers(element, text);
        });
    }

    createGlitchLayers(element, text) {
        const before = document.createElement('span');
        const after = document.createElement('span');
        
        before.textContent = text;
        after.textContent = text;
        
        before.className = 'glitch-before';
        after.className = 'glitch-after';
        
        element.appendChild(before);
        element.appendChild(after);
    }
}

// Initialize all animation classes
document.addEventListener('DOMContentLoaded', () => {
    window.animationManager = new AnimationManager();
    window.textAnimator = new TextAnimator();
    window.morphAnimator = new MorphAnimator();
    window.loadingAnimator = new LoadingAnimator();
    window.glitchEffect = new GlitchEffect();
});

// Utility functions for animations
function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = start + (end - start) * progress;
        element.textContent = Math.floor(current);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

function createRippleEffect(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', createRippleEffect);
    });
});

// Smooth reveal animation for sections
function revealSection(section) {
    const elements = section.querySelectorAll('.reveal-element');
    
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('revealed');
        }, index * 200);
    });
}

// Add reveal animation to sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealSection(entry.target);
            }
        });
    });

    sections.forEach(section => observer.observe(section));
}); 