// This file is ready for your custom JavaScript.
// For now, it's empty, but you can add interactivity here later.

console.log("Website script loaded successfully!");

// Example: Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
