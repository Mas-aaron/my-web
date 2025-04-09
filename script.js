// Mobile Menu Toggle
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Initialize Swipers
document.addEventListener('DOMContentLoaded', function() {
  // Hero Swiper
  var heroSwiper = new Swiper(".heroSwiper", {
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
      el: ".swiper-controls .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">0' + (index + 1) + '</span>';
      },
    },
    navigation: {
      nextEl: ".swiper-controls .swiper-button-next",
      prevEl: ".swiper-controls .swiper-button-prev",
    },
  });

  // Courses Swiper
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
// Hero Swiper
var heroSwiper = new Swiper(".heroSwiper", {
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
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  Search Functionality
  const searchInput = document.querySelector('.search-input');
  const searchButton = document.querySelector('.search-button');
  const searchContainer = document.querySelector('.search-container');

  // Focus effect
  searchInput.addEventListener('focus', function() {
    searchContainer.classList.add('focused');
  });

  searchInput.addEventListener('blur', function() {
    if (!this.value) {
      searchContainer.classList.remove('focused');
    }
  });

  // Mobile search expansion
  searchButton.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      searchContainer.classList.toggle('expanded');
      if (searchContainer.classList.contains('expanded')) {
        searchInput.focus();
      }
    } else {
      performSearch();
    }
  });

  // Close expanded search when clicking outside
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && 
      searchContainer.classList.contains('expanded') && 
      !searchContainer.contains(e.target)) {
      searchContainer.classList.remove('expanded');
    }
  });

  // Search functionality
  function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
      window.location.href = `category.html?search=${encodeURIComponent(searchTerm)}`;
    }
  }

  // Search on Enter key
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
});

function toggleSearch() {
  const searchBox = document.querySelector('.search-box');
  searchBox.classList.toggle('active');
  
  // Close menu if open
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.remove('active');
}

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
  
  // Close search if open
  const searchBox = document.querySelector('.search-box');
  searchBox.classList.remove('active');
}

// Sticky Header
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// Add click handlers for hero buttons
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

// Toggle password visibility
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

// Form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your login logic here
    console.log('Form submitted');
    // You would typically validate and send to server here
});

// Search Functionality
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const searchContainer = document.querySelector('.search-container');

// Focus effect
searchInput.addEventListener('focus', function() {
    searchContainer.classList.add('focused');
});

searchInput.addEventListener('blur', function() {
    if (!this.value) {
        searchContainer.classList.remove('focused');
    }
});

// Mobile search expansion
searchButton.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        searchContainer.classList.toggle('expanded');
        if (searchContainer.classList.contains('expanded')) {
            searchInput.focus();
        }
    } else {
        performSearch();
    }
});

// Close expanded search when clicking outside
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && 
        searchContainer.classList.contains('expanded') && 
        !searchContainer.contains(e.target)) {
        searchContainer.classList.remove('expanded');
    }
});

// Search functionality
function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
        window.location.href = `category.html?search=${encodeURIComponent(searchTerm)}`;
    }
}

// Search on Enter key
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});


// Add this to your script.js
// Toggle search dropdown
document.querySelector('.search-dropdown-toggle')?.addEventListener('click', function(e) {
  e.stopPropagation();
  const menu = this.nextElementSibling;
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown when clicking outside
document.addEventListener('click', function() {
  const menu = document.querySelector('.search-dropdown-menu');
  if (menu) menu.style.display = 'none';
});



// Enhanced search functionality
function performSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const searchCategory = document.querySelector('.search-dropdown-toggle span').textContent;
  
  if (searchTerm) {
    let searchUrl = 'category.html';
    
    // Modify the URL based on search category
    switch(searchCategory) {
      case 'Courses':
        searchUrl = 'category.html';
        break;
      case 'Instructors':
        searchUrl = 'instructors.html';
        break;
      case 'Blog':
        searchUrl = 'blog.html';
        break;
    }
    
    window.location.href = `${searchUrl}?search=${encodeURIComponent(searchTerm)}`;
  }
}

// Update dropdown selection
document.querySelectorAll('.search-dropdown-menu a').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const text = this.textContent;
    document.querySelector('.search-dropdown-toggle span').textContent = text;
    document.querySelector('.search-dropdown-menu').style.display = 'none';
  });
});



// Toggle password visibility
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

// Form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  // Add your login logic here
  console.log('Form submitted');
  // You would typically validate and send to server here
});

// <!-- Add this script at the end of your login.html file -->

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display a success message
    alert('Login successful! Welcome back to Francis Academy.');
});