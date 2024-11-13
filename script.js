document.addEventListener("DOMContentLoaded", function() {
    // ============================
    // Initial Loading and Header
    // ============================

    // Hide header and nav initially
    document.querySelector("header").style.display = "none";

    // Display loading screen for 2 seconds, then show header and nav
    setTimeout(() => {
        document.querySelector(".loading-page").style.display = "none";
        document.querySelector("header").style.display = "flex";

        // Add the loaded class to the home section to trigger the transition
        document.querySelector(".home").classList.add("loaded");

        // Programmatically trigger the Home button click for smooth scroll to the home section
        document.querySelector('a[href="#home"]').click();
    }, 2000);

    // Ensure page starts at the top
    window.scrollTo(0, 0);

    // ============================
    // Menu Toggle Functionality
    // ============================

    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    // Toggle menu on click
    menuToggle.addEventListener('click', function(event) {
        nav.classList.toggle('active');

        if (nav.classList.contains('active')) {
            nav.style.display = "block";
            setTimeout(() => {
                nav.style.opacity = "1";
                nav.style.transform = "translateY(0)";
            }, 10);
        } else {
            nav.style.opacity = "0";
            nav.style.transform = "translateY(-100%)";
            setTimeout(() => {
                nav.style.display = "none";
            }, 300);
        }

        // Prevent event propagation to avoid closing menu when clicking on toggle
        event.stopPropagation();
    });

    // Close menu when clicking outside the menu
    document.addEventListener('click', function(event) {
        if (nav.classList.contains('active') && !nav.contains(event.target) && !menuToggle.contains(event.target)) {
            closeMenu();
        }
    });

    // Close menu on scroll
    window.addEventListener('scroll', function() {
        if (nav.classList.contains('active')) {
            closeMenu();
        }
    });

    // ============================
    // Smooth Scrolling for Links
    // ============================

    const smoothScrollLinks = [
        { selector: 'a[href="#home"]', target: '.home' },
        { selector: 'a[href="#education"]', target: '.education' },
        { selector: 'a[href="#projects"]', target: '.projects' },
        { selector: 'a[href="#skills"]', target: '.skills' },
    ];

    smoothScrollLinks.forEach(link => {
        document.querySelector(link.selector).addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(link.target).scrollIntoView({ behavior: "smooth" });
        });
    });

    // ============================
    // Helper Functions
    // ============================

    function closeMenu() {
        nav.classList.remove('active');
        nav.style.opacity = "0";
        nav.style.transform = "translateY(-100%)";
        setTimeout(() => {
            nav.style.display = "none";
        }, 300);
    }
});
