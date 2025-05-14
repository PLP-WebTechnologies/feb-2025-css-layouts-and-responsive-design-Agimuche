// This file contains JavaScript code that handles interactivity for the webpage.
// It includes functionality for toggling the navigation menu on smaller screens.

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});