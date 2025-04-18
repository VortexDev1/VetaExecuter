document.addEventListener('DOMContentLoaded', function() {
    // Theme switcher
    const themeSwitcher = document.getElementById('theme-switcher');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeSwitcher.addEventListener('click', switchTheme);
    
    function switchTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileNav.contains(e.target) && e.target !== mobileMenuBtn) {
            mobileNav.classList.remove('active');
        }
    });
    
    // FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                mobileNav.classList.remove('active');
            }
        });
    });
    
    // Add animation class to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .download-card, .faq-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});