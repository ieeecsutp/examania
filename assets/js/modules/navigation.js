/**
 * Navigation Component
 * Handles mobile menu toggle and active states
 */

export class Navigation {
  constructor(toggleSelector, menuSelector) {
    this.toggle = document.querySelector(toggleSelector);
    this.menu = document.querySelector(menuSelector);
    this.links = document.querySelectorAll('.c-nav__link');

    if (this.toggle && this.menu) {
      this.init();
    }
  }

  init() {
    this.bindEvents();
    this.handleActiveState();
  }

  bindEvents() {
    this.toggle.addEventListener('click', () => this.toggleMenu());

    document.addEventListener('click', e => {
      if (!e.target.closest('.c-nav')) {
        this.closeMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    this.menu.classList.toggle('is-hidden');

    const isExpanded = !this.menu.classList.contains('is-hidden');
    this.toggle.setAttribute('aria-expanded', isExpanded);
  }

  closeMenu() {
    this.menu.classList.add('is-hidden');
    this.toggle.setAttribute('aria-expanded', 'false');
  }

  handleActiveState() {
    this.links.forEach(link => {
      link.addEventListener('click', e => {
        this.links.forEach(l => l.classList.remove('c-nav__link--active'));
        e.currentTarget.classList.add('c-nav__link--active');
        this.closeMenu();
      });
    });
  }
}
