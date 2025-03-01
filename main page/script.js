// Loading Animation
window.addEventListener('load', () => {
    const loadingAnimation = document.querySelector('.loading-animation');
    if (loadingAnimation) {
        setTimeout(() => {
            loadingAnimation.classList.add('hide');
            document.body.style.overflow = 'visible';
        }, 1000);
    }
});

// Initialize AOS with enhanced settings
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false,
        offset: 50,
        delay: 100
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('fa-bars');
            menuToggle.querySelector('i').classList.toggle('fa-times');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle?.contains(e.target) && !navLinks?.contains(e.target)) {
            navLinks?.classList.remove('active');
            menuToggle?.querySelector('i')?.classList.add('fa-bars');
            menuToggle?.querySelector('i')?.classList.remove('fa-times');
        }
    });

    // Enhanced Curriculum Module Handling
    const curriculumModules = document.querySelectorAll('.curriculum-module');
    const priceCards = document.querySelectorAll('.price-card');

    function showModulesForCourse(courseType) {
        curriculumModules.forEach(module => {
            if (module.dataset.course === courseType) {
                module.style.display = 'block';
                module.classList.add('animate-fade-in');
            } else {
                module.style.display = 'none';
                module.classList.remove('animate-fade-in');
            }
        });
    }

    // Initially show starter course content
    showModulesForCourse('starter');

    priceCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            const courseType = card.classList.contains('starter') ? 'starter' :
                             card.classList.contains('pro') ? 'pro' : 'premium';
            showModulesForCourse(courseType);
        });
    });

    // Enhanced Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                navLinks?.classList.remove('active');
                menuToggle?.querySelector('i')?.classList.add('fa-bars');
                menuToggle?.querySelector('i')?.classList.remove('fa-times');
            }
        });
    });

    // Enhanced Scroll Animation
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animate-fade-in');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Navbar Scroll Effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.classList.add('hide');
        } else {
            navbar.classList.remove('hide');
        }
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Course Card Hover Effects
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = 'var(--shadow-lg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = 'var(--shadow-md)';
        });
    });

    // Social Button Hover Effects
    const socialBtns = document.querySelectorAll('.telegram-btn, .instagram-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });

    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // Add scroll-triggered animations to sections
    const observerOptions = {
        threshold: 0.2
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Enhanced Curriculum Section Handling
    function initializeCurriculum() {
        const curriculumSections = document.querySelectorAll('.curriculum-section');
        
        // Add click handlers
        curriculumSections.forEach(section => {
            const header = section.querySelector('.section-header');
            const lessonsList = section.querySelector('.section-lessons');
            
            if (header && lessonsList) {
                header.addEventListener('click', () => {
                    // Toggle current section
                    const isActive = section.classList.contains('active');
                    
                    // Close all sections
                    curriculumSections.forEach(s => {
                        s.classList.remove('active');
                        s.querySelector('.section-lessons').style.display = 'none';
                    });
                    
                    // If the clicked section wasn't active, open it
                    if (!isActive) {
                        section.classList.add('active');
                        lessonsList.style.display = 'block';
                        
                        // Scroll into view if needed
                        const headerOffset = 100;
                        const sectionTop = section.getBoundingClientRect().top;
                        const windowTop = window.pageYOffset;
                        
                        if (sectionTop < headerOffset) {
                            window.scrollTo({
                                top: windowTop + sectionTop - headerOffset - 20,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            }
        });

        // Open first section by default
        if (curriculumSections.length > 0) {
            const firstSection = curriculumSections[0];
            firstSection.classList.add('active');
            const firstLessonsList = firstSection.querySelector('.section-lessons');
            if (firstLessonsList) {
                firstLessonsList.style.display = 'block';
            }
        }

        // Add hover effects for lesson items
        const lessonItems = document.querySelectorAll('.section-lessons li');
        lessonItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateX(10px)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateX(0)';
            });
        });
    }

    // Initialize curriculum when document is ready
    initializeCurriculum();
}); 