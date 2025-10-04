/**
 * Main Application
 * Entry point with module imports
 */

import { Navigation } from './modules/navigation.js';
import { DOMUtils } from './modules/utils.js';

class App {
  constructor() {
    this.components = {};
    this.init();
  }

  init() {
    DOMUtils.onDOMReady(() => {
      this.initializeComponents();
      this.setupGlobalListeners();
      console.log('✅ Application initialized');
    });
  }

  initializeComponents() {
    this.components.navigation = new Navigation('#navToggle', '#mobileMenu');
  }

  setupGlobalListeners() {
    this.handleSmoothScroll();
    this.handleButtons();
  }

  handleSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  }

  handleButtons() {
    const buttons = document.querySelectorAll('.c-button');

    buttons.forEach(button => {
      button.addEventListener('click', e => {
        const buttonText = button.textContent.trim();
        console.log(`Button clicked: ${buttonText}`);
      });
    });
  }
}

// Initialize
new App();
