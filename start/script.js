// Smooth scroll function
function scrollToAccess() {
    const curriculumSection = document.querySelector('.curriculum');
    curriculumSection.scrollIntoView({ behavior: 'smooth' });
}

// Add animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});

// Add hover effect for CTA buttons
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#c0392b'; // Darker shade of accent color
    });
    
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#e74c3c'; // Original accent color
    });
});

// New Testimonial Slider
document.addEventListener('DOMContentLoaded', function() {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    testimonialSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - testimonialSlider.offsetLeft;
        scrollLeft = testimonialSlider.scrollLeft;
    });

    testimonialSlider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    testimonialSlider.addEventListener('mouseup', () => {
        isDown = false;
    });

    testimonialSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - testimonialSlider.offsetLeft;
        const walk = (x - startX) * 2;
        testimonialSlider.scrollLeft = scrollLeft - walk;
    });
});

// Video Lazy Loading
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.video-wrapper iframe');
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                if (!video.src.includes('youtube')) {
                    video.src = video.dataset.src;
                }
                videoObserver.unobserve(video);
            }
        });
    }, {
        threshold: 0.5
    });

    videos.forEach(video => {
        video.dataset.src = video.src;
        video.src = '';
        videoObserver.observe(video);
    });
});

// Countdown Timer for Limited Offer
function startCountdown() {
    const countdown = document.createElement('div');
    countdown.className = 'countdown';
    document.querySelector('.price-card').prepend(countdown);

    let hours = 23;
    let minutes = 59;
    let seconds = 59;

    setInterval(() => {
        if (seconds > 0) {
            seconds--;
        } else if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
        }

        countdown.innerHTML = `Offer ends in: ${hours}:${minutes}:${seconds}`;
    }, 1000);
}

startCountdown();

// Add smooth reveal animations
const revealElements = document.querySelectorAll('.benefit-card, .module, .bonus-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
    revealObserver.observe(element);
});

// Add class for revealed elements
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.revealed');
    elements.forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    });
});

// Add to existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements when they come into view
    const animatedElements = document.querySelectorAll('.feature-item, .point, .app-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Add hover effect for app cards
    const appCards = document.querySelectorAll('.app-card');
    appCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add smooth scroll for CTA buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetSection = document.querySelector('.action-section');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add new attraction points interactions

document.addEventListener('DOMContentLoaded', function() {
    // Animate point cards on scroll
    const pointCards = document.querySelectorAll('.point-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    pointCards.forEach(card => {
        observer.observe(card);
    });

    // Smooth scroll for quick links
    document.querySelectorAll('.link-card').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effect for point cards
    pointCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for all elements
    const smoothScroll = (target) => {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.platform, .overview-item, .timeline-item, .requirement-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });

    // Add hover effects for interactive elements
    document.querySelectorAll('.platform, .overview-item, .requirement-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });

    // CTA button click handler
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', () => {
            const actionSection = document.querySelector('.action-section');
            smoothScroll(actionSection);
        });
    });

    // Add CSS class for fade-in animations
    document.body.classList.add('loaded');
});

// Add this to your existing styles
document.documentElement.style.setProperty('--animate-duration', '0.8s');

// Prevent flash of unstyled content
document.body.style.visibility = 'visible';

// Privacy Policy Modal Functions
function openPrivacyModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    
    // Add fade-in animation
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function closePrivacyModal() {
    const modal = document.querySelector('.modal');
    modal.style.opacity = '0';
    
    // Wait for fade-out animation to complete before hiding
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 300);
}

// Close modal when clicking outside content
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closePrivacyModal();
            }
        });
    }
});

// Video thumbnail click handler
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.video-thumbnail img');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const wrapper = this.parentElement;
            this.style.display = 'none';
            const iframe = wrapper.querySelector('iframe');
            // Update the iframe src to force the video to play
            const currentSrc = iframe.src;
            iframe.src = currentSrc + (currentSrc.includes('?') ? '&' : '?') + 'autoplay=1';
        });
    });
}); 