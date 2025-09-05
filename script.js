// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollIndicator = document.querySelector('.scroll-indicator');
const scrollToTopBtn = document.getElementById('scrollToTop');

// Countdown Timer - Indian Standard Time (IST: UTC+5:30)
// Create date in IST by adding 5:30 hours to UTC
const weddingDateUTC = new Date('November 12, 2025 10:30:00 UTC'); // 16:00 IST = 10:30 UTC
const weddingDate = weddingDateUTC.getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = '<div class="countdown-item"><span class="countdown-number">00</span><span class="countdown-label">Days</span></div><div class="countdown-item"><span class="countdown-number">00</span><span class="countdown-label">Hours</span></div><div class="countdown-item"><span class="countdown-number">00</span><span class="countdown-label">Minutes</span></div><div class="countdown-item"><span class="countdown-number">00</span><span class="countdown-label">Seconds</span></div>';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Function to get current time in IST
function getCurrentISTTime() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const ist = new Date(utc + (5.5 * 3600000)); // IST is UTC+5:30
    return ist;
}

// Function to format IST time for display
function formatISTTime(date) {
    return date.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll indicator click
scrollIndicator.addEventListener('click', () => {
    const storySection = document.querySelector('#story');
    if (storySection) {
        const offsetTop = storySection.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
});

// Scroll to top button functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.timeline-item, .event-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});


// Add loading animation to elements
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.timeline-item, .event-card');

    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';

        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Add hover effects to interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const interactiveElements = document.querySelectorAll('.event-card, .timeline-item');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) { // Only on desktop
                el.style.transform = 'translateY(-5px)';
            }
        });

        el.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) { // Only on desktop
                el.style.transform = 'translateY(0)';
            }
        });
    });
});

// Add smooth reveal animation for sections
const revealElements = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s ease';
    revealObserver.observe(el);
});

// Responsive behavior for countdown timer
function adjustCountdownLayout() {
    const countdown = document.querySelector('.countdown');
    const countdownItems = document.querySelectorAll('.countdown-item');

    if (window.innerWidth <= 480) {
        countdown.style.gap = '0.5rem';
        countdownItems.forEach(item => {
            item.style.minWidth = '60px';
            item.style.padding = '1rem 0.5rem';
        });
    } else if (window.innerWidth <= 768) {
        countdown.style.gap = '0.8rem';
        countdownItems.forEach(item => {
            item.style.minWidth = '70px';
            item.style.padding = '1.2rem 0.8rem';
        });
    } else {
        countdown.style.gap = '1rem';
        countdownItems.forEach(item => {
            item.style.minWidth = '80px';
            item.style.padding = '1.5rem 1rem';
        });
    }
}

// Call on load and resize
window.addEventListener('load', adjustCountdownLayout);
window.addEventListener('resize', adjustCountdownLayout);

// Touch support for mobile devices
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could be used for navigation
            console.log('Swipe up detected');
        } else {
            // Swipe down - could be used for navigation
            console.log('Swipe down detected');
        }
    }
}

// Performance optimization - debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler with proper debouncing
const debouncedScrollHandler = debounce(() => {
    const scrollY = window.scrollY;

    // Navbar background and shadow changes
    if (scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }

    // Show/hide scroll to top button
    if (scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }

    // Active navigation link highlighting
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, 16); // ~60fps

// Single scroll event listener
window.addEventListener('scroll', debouncedScrollHandler, { passive: true });

// Parallax effect for hero section (only on desktop)
const debouncedParallaxHandler = debounce(() => {
    if (window.innerWidth > 768) {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.3; // Reduced for smoother effect

        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    }
}, 16);

window.addEventListener('scroll', debouncedParallaxHandler, { passive: true });

// Add CSS for active states and animations
const style = document.createElement('style');
style.textContent = `
    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .nav-link.active {
        color: #e74c3c;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    /* Enhanced mobile touch targets */
    @media (max-width: 768px) {
        .nav-link {
            padding: 1rem;
            display: block;
        }
        
        .gallery-item {
            min-height: 44px;
            min-width: 44px;
        }
        
        .countdown-item {
            min-height: 44px;
        }
    }
    
    /* Improved focus states for accessibility */
    .nav-link:focus,
    .gallery-item:focus,
    .countdown-item:focus {
        outline: 2px solid #e74c3c;
        outline-offset: 2px;
    }
    
    /* Smooth transitions for all interactive elements */
    .event-card,
    .gallery-item,
    .timeline-item,
    .countdown-item {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
document.head.appendChild(style);


// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set initial countdown layout
    adjustCountdownLayout();

    // Play background music
    const backgroundMusic = document.getElementById('backgroundMusic');
    if (backgroundMusic) {
        console.log('Audio element found:', backgroundMusic);
        backgroundMusic.volume = 0.5; // Set volume to 50%

        // Add event listeners for debugging
        backgroundMusic.addEventListener('loadstart', () => console.log('Audio loading started'));
        backgroundMusic.addEventListener('canplay', () => console.log('Audio can play'));
        backgroundMusic.addEventListener('error', (e) => console.log('Audio error:', e));
        backgroundMusic.addEventListener('play', () => {
            console.log('Audio started playing');
            // Update button state when music starts
            const musicToggle = document.getElementById('musicToggle');
            if (musicToggle) {
                musicToggle.classList.add('playing');
                musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            }
        });
        backgroundMusic.addEventListener('pause', () => {
            console.log('Audio paused');
            // Update button state when music pauses
            const musicToggle = document.getElementById('musicToggle');
            if (musicToggle) {
                musicToggle.classList.remove('playing');
                musicToggle.innerHTML = '<i class="fas fa-music"></i>';
            }
        });

        // Try to play immediately (will likely fail on mobile)
        backgroundMusic.play().catch(error => {
            console.log('Autoplay prevented:', error);
        });

        // Start music on first user interaction (works on all devices)
        const startMusicOnInteraction = () => {
            if (backgroundMusic.paused) {
                backgroundMusic.play().then(() => {
                    console.log('Music started on user interaction');
                }).catch(e => console.log('Still cannot play:', e));
            }
        };

        // Listen for various user interactions
        document.addEventListener('click', startMusicOnInteraction, { once: true });
        document.addEventListener('touchstart', startMusicOnInteraction, { once: true });
        document.addEventListener('scroll', startMusicOnInteraction, { once: true });
        document.addEventListener('keydown', startMusicOnInteraction, { once: true });

        // Set initial button state after a small delay to ensure audio state is stable
        setTimeout(() => {
            const musicToggle = document.getElementById('musicToggle');
            if (musicToggle && !backgroundMusic.paused) {
                musicToggle.classList.add('playing');
                musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            }
        }, 100);
    } else {
        console.log('Audio element not found');
    }

    // Music toggle button functionality
    const musicToggle = document.getElementById('musicToggle');
    if (musicToggle && backgroundMusic) {
        musicToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Toggle play/pause
            if (backgroundMusic.paused) {
                backgroundMusic.play().then(() => {
                    console.log('Music started playing via button');
                }).catch(error => {
                    console.log('Error playing music:', error);
                });
            } else {
                backgroundMusic.pause();
                console.log('Music paused via button');
            }
        });
    }

    // Add loading class to body for initial animation
    document.body.classList.add('loaded');


    // Preload critical images (if any are added later)
    const imageUrls = [];
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', debounce(() => {
    adjustCountdownLayout();

    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}, 250));

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Tab navigation enhancement
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

// Remove keyboard navigation class on mouse use
document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Add keyboard navigation styles
const keyboardStyle = document.createElement('style');
keyboardStyle.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid #e74c3c !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(keyboardStyle);