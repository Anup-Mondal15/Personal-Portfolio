// Sticky Header on Scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Portfolio Modal Functionality
const portfolioModels = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

// Open portfolio modal
const portfolioModel = function(modelClick){
    portfolioModels[modelClick].classList.add("active");
    document.body.style.overflow = 'hidden';
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModel(i);
    });
});

// Close portfolio modal
portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModels.forEach((portfolioModelView) => {
            portfolioModelView.classList.remove("active");
        });
        document.body.style.overflow = 'auto';
    });
});

// Close modal when clicking outside
portfolioModels.forEach((modal) => {
    modal.addEventListener("click", (e) => {
        if(e.target === modal){
            modal.classList.remove("active");
            document.body.style.overflow = 'auto';
        }
    });
});

// Dark/Light Theme Toggle
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    // Save theme preference
    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

// Load saved theme
const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

// Scroll to Top Button
const scrollToTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollToTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Navigation Active State on Scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-items a");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            navLinks.forEach(link => {
                link.classList.remove("active");
                if(link.getAttribute("href") === `#${id}`){
                    link.classList.add("active");
                }
            });
        }
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navigation = document.querySelector(".navigation");
            navigation.classList.remove("active");
            document.body.style.overflow = 'auto';
        }
    });
});

// Mobile Menu Toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navigation.classList.add("active");
        document.body.style.overflow = 'hidden';
    });
}

if(closeBtn){
    closeBtn.addEventListener("click", () => {
        navigation.classList.remove("active");
        document.body.style.overflow = 'auto';
    });
}

// Close menu when clicking nav items
navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
        document.body.style.overflow = 'auto';
    });
});

// Close menu when clicking outside
navigation.addEventListener("click", (e) => {
    if(e.target === navigation){
        navigation.classList.remove("active");
        document.body.style.overflow = 'auto';
    }
});

// Contact Form Submission 

<script>
  (function(){
      emailjs.init("-1Osgi7EMgZ9l3Or8"); // এখানে তোমার public key দাও
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      emailjs.sendForm('service_y46w3j8', 'template_i6r2lrs', this)
          .then(function() {
              alert('✅ Message sent successfully!');
          }, function(error) {
              alert('❌ Failed to send message. Please try again.');
          });
  });
</script>

// ScrollReveal Animations
ScrollReveal({
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false
});

// Home Section Animations
ScrollReveal().reveal('.home .info h2', {delay: 300, origin: 'top'});
ScrollReveal().reveal('.home .info h3', {delay: 400, origin: 'left'});
ScrollReveal().reveal('.home .info p', {delay: 500, origin: 'right'});
ScrollReveal().reveal('.home .info .btn', {delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.media-icons', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.home-img', {delay: 700, origin: 'right'});

// Section Titles
ScrollReveal().reveal('.section-title-01', {delay: 300, origin: 'top'});
ScrollReveal().reveal('.section-title-02', {delay: 400, origin: 'bottom'});

// About Section
ScrollReveal().reveal('.about-img', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.about-info .description', {delay: 600, origin: 'right'});
ScrollReveal().reveal('.about-info .professional-list', {delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.about-info .btn', {delay: 800, origin: 'bottom'});

// Skills Section
ScrollReveal().reveal('.category-title', {delay: 400, origin: 'top'});
ScrollReveal().reveal('.skill-card', {delay: 500, origin: 'bottom', interval: 150});
ScrollReveal().reveal('.tool-item', {delay: 400, origin: 'bottom', interval: 100});
ScrollReveal().reveal('.programming-item', {delay: 400, origin: 'bottom', interval: 100});
ScrollReveal().reveal('.skill-bar-item', {delay: 400, origin: 'left', interval: 150});

// Education Section
ScrollReveal().reveal('.section-subtitle', {delay: 400, origin: 'top'});
ScrollReveal().reveal('.timeline-item', {delay: 500, origin: 'left', interval: 200});
ScrollReveal().reveal('.cert-card', {delay: 500, origin: 'bottom', interval: 150});

// Experience Section
ScrollReveal().reveal('.experience-card', {delay: 500, origin: 'bottom', interval: 200});

// Portfolio Section
ScrollReveal().reveal('.img-card', {delay: 500, origin: 'bottom', interval: 150});

// Contact Section
ScrollReveal().reveal('.contact-left h2', {delay: 400, origin: 'top'});
ScrollReveal().reveal('.contact-list li', {delay: 500, origin: 'left', interval: 150});
ScrollReveal().reveal('.contact-right p', {delay: 400, origin: 'right'});
ScrollReveal().reveal('.contact-form', {delay: 500, origin: 'right'});

// Footer
ScrollReveal().reveal('footer .about', {delay: 400, origin: 'bottom'});
ScrollReveal().reveal('footer .info', {delay: 500, origin: 'bottom'});
ScrollReveal().reveal('footer .follow', {delay: 600, origin: 'bottom'});

// Counter Animation for Professional List
let counterAnimated = false;

const animateCounters = () => {
    const counters = document.querySelectorAll('.professional-list .list-item h3');
    const aboutSection = document.querySelector('#about');
    
    if(aboutSection && !counterAnimated){
        const sectionTop = aboutSection.offsetTop;
        const scrollY = window.pageYOffset;
        
        if(scrollY > sectionTop - window.innerHeight + 200){
            counters.forEach(counter => {
                const target = parseInt(counter.innerText);
                let count = 0;
                const increment = target / 50;
                
                const updateCounter = () => {
                    if(count < target){
                        count += increment;
                        counter.innerText = Math.ceil(count) + '+';
                        setTimeout(updateCounter, 30);
                    } else {
                        counter.innerText = target + '+';
                    }
                };
                
                updateCounter();
            });
            counterAnimated = true;
        }
    }
};

window.addEventListener('scroll', animateCounters);

// Keyboard Navigation Support
document.addEventListener('keydown', (e) => {
    // Close modal on ESC key
    if(e.key === 'Escape'){
        portfolioModels.forEach(modal => {
            modal.classList.remove('active');
        });
        navigation.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Add active state to current page in navigation
const currentPage = window.location.hash || '#home';
navItems.forEach(link => {
    if(link.getAttribute('href') === currentPage){
        link.classList.add('active');
    }
});

// Prevent horizontal scroll
document.body.style.overflowX = 'hidden';

// Performance: Debounced scroll handler
let scrollTimeout;
const debouncedScroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        animateCounters();
    }, 100);
};


    // ==================== MOUSE TRAIL EFFECT ====================
    const createParticle = (x, y) => {
        const particle = document.createElement('div');
        particle.className = 'mouse-particle';
        particle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, rgba(138, 43, 226, 0.8), transparent);
            border-radius: 50%;
            pointer-events: none;
            left: ${x}px;
            top: ${y}px;
            z-index: 9999;
            animation: particleFade 1s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    };

    let lastParticleTime = 0;
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastParticleTime > 50) {
            createParticle(e.clientX, e.clientY);
            lastParticleTime = now;
        }
    });
// ==================== CSS ANIMATION KEYFRAMES (Injected) ====================
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.5) translateY(-20px);
        }
    }

    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        animation: rippleAnimation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes rippleAnimation {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }

    .project-card:focus {
        outline: 3px solid #667eea;
        outline-offset: 4px;
    }

    .project-card.animate {
        animation: cardPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    @keyframes cardPop {
        0% {
            transform: scale(0.8);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);


window.addEventListener('scroll', debouncedScroll);
