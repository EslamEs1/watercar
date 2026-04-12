// Water Cart Premium Landing Page Interactions

document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
    initSmoothScroll();
    initHeaderScroll();
    initMobileNav();
});

// FAQ Accordion Logic
function initAccordion() {
    const accordionItems = document.querySelectorAll('.faq-item');
    
    accordionItems.forEach(item => {
        const button = item.querySelector('.faq-question');
        const content = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        button.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Close all other items
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
                otherItem.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
            });

            if (!isOpen) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

// Global Header Background Change on Scroll
function initHeaderScroll() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-white', 'shadow-md', 'py-2');
            header.classList.remove('bg-transparent', 'py-4');
        } else {
            header.classList.remove('bg-white', 'shadow-md', 'py-2');
            header.classList.add('bg-transparent', 'py-4');
        }
    });
}

// Smooth Scroll for Internal Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}

// Mobile Menu Toggle
function initMobileNav() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}
