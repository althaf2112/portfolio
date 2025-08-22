// This file contains JavaScript code for interactive elements of the portfolio, such as smooth scrolling, form validation, and any other dynamic features.

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation example
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const emailInput = document.querySelector('input[type="email"]');
            if (!emailInput.value) {
                e.preventDefault();
                alert('Please enter your email address.');
            }
        });
    }
});