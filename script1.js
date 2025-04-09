// Mobile Menu and Search Toggle
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const searchBox = document.querySelector('.search-box');
    navLinks.classList.toggle("active");
    searchBox.classList.remove("active");
  }
  
  function toggleSearch() {
    const searchBox = document.querySelector('.search-box');
    const navLinks = document.getElementById("navLinks");
    searchBox.classList.toggle("active");
    navLinks.classList.remove("active");
  }
  
  // Initialize Swipers when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Hero Swiper - only initialize once
    if (document.querySelector(".heroSwiper")) {
      const heroSwiper = new Swiper(".heroSwiper", {
        direction: "horizontal",
        loop: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        effect: "creative",
        creativeEffect: {
          prev: {
            translate: ["-120%", 0, -500],
            opacity: 0,
          },
          next: {
            translate: ["120%", 0, -500],
            opacity: 0,
          },
        },
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">0' + (index + 1) + '</span>';
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  
    // Courses Swiper - only initialize if exists
    if (document.querySelector('.courses-slider')) {
      const coursesSwiper = new Swiper('.courses-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination-courses',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next-courses',
          prevEl: '.swiper-button-prev-courses',
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          }
        }
      });
    }
  
    // Search Functionality
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    const searchContainer = document.querySelector('.search-container');
  
    if (searchInput && searchButton && searchContainer) {
      // Focus effect
      searchInput.addEventListener('focus', function() {
        searchContainer.classList.add('focused');
      });
  
      searchInput.addEventListener('blur', function() {
        if (!this.value) {
          searchContainer.classList.remove('focused');
        }
      });
  
      // Search functionality
      function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm) {
          window.location.href = `category.html?search=${encodeURIComponent(searchTerm)}`;
        }
      }
  
      // Search on button click
      searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        performSearch();
      });
  
      // Search on Enter key
      searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          performSearch();
        }
      });
    }
  
    // Hero buttons navigation
    document.querySelectorAll('.hero-buttons .btn-primary').forEach((button, index) => {
      button.addEventListener('click', function() {
        switch(index) {
          case 0: // First slide - Get Started
            window.location.href = 'category.html';
            break;
          case 1: // Second slide - Browse Courses
            window.location.href = 'category.html';
            break;
          case 2: // Third slide - Explore Kids Courses
            window.location.href = 'Kids.html';
            break;
        }
      });
    });
  
    document.querySelectorAll('.hero-buttons .btn-outline').forEach((button, index) => {
      button.addEventListener('click', function() {
        switch(index) {
          case 0: // First slide - Learn More
            window.location.href = 'about.html';
            break;
          case 1: // Second slide - Meet Instructors
            window.location.href = 'instructors.html';
            break;
          case 2: // Third slide - How It Works
            window.location.href = 'how-it-works.html';
            break;
        }
      });
    });
  });
  
  // Sticky Header
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
      header.classList.toggle('sticky', window.scrollY > 0);
    }
  });
  
  // Close search when clicking outside on mobile
  document.addEventListener('click', function(e) {
    const searchBox = document.querySelector('.search-box');
    const searchContainer = document.querySelector('.search-container');
    
    if (window.innerWidth <= 768 && 
        searchBox && 
        searchBox.classList.contains('active') && 
        !searchContainer.contains(e.target) &&
        !e.target.classList.contains('mobile-search')) {
      searchBox.classList.remove('active');
    }
  });
  
  // Toggle password visibility (for login page)
  document.querySelector('.toggle-password')?.addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const icon = this.querySelector('i');
    
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  });
  
  // Form submission (for login page)
  document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login successful! Welcome back to Francis Academy.');
  });