// DRK Collection Global JavaScript

class DRKCollection {
  constructor() {
    this.init();
  }

  init() {
    this.setupProductFilters();
    this.setupMobileMenu();
    this.setupVideoPlayers();
  }

  setupProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.style.color = '#888';
          btn.style.borderBottomColor = 'transparent';
        });

        // Add active class to clicked button
        button.classList.add('active');
        button.style.color = '#e0e0e0';
        button.style.borderBottomColor = '#e0e0e0';

        // Filter products (basic implementation)
        const filter = button.dataset.filter;
        // Add your filtering logic here
      });
    });
  }

  setupMobileMenu() {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', () => {
        const nav = document.querySelector('.header-nav');
        nav.classList.toggle('active');
      });
    }
  }

  setupVideoPlayers() {
    // Ensure videos play properly
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {
          // Autoplay was prevented
        });
      });
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new DRKCollection();
  });
} else {
  new DRKCollection();
}

// Shopify theme editor support
if (Shopify.designMode) {
  document.addEventListener('shopify:section:load', () => {
    new DRKCollection();
  });
}

