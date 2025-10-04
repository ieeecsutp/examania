/**
 * Utility Functions
 * Reusable DOM and animation helpers
 */

export const DOMUtils = {
  onDOMReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  },

  addClass(element, className) {
    element?.classList.add(className);
  },

  removeClass(element, className) {
    element?.classList.remove(className);
  },

  toggleClass(element, className) {
    element?.classList.toggle(className);
  },

  hasClass(element, className) {
    return element?.classList.contains(className) ?? false;
  },

  getElement(selector) {
    return document.querySelector(selector);
  },

  getElements(selector) {
    return Array.from(document.querySelectorAll(selector));
  },
};

export const AnimationUtils = {
  fadeIn(element, duration = 300) {
    if (!element) return;

    element.style.opacity = '0';
    element.style.display = 'block';

    requestAnimationFrame(() => {
      element.style.transition = `opacity ${duration}ms ease`;
      element.style.opacity = '1';
    });
  },

  fadeOut(element, duration = 300) {
    if (!element) return;

    element.style.transition = `opacity ${duration}ms ease`;
    element.style.opacity = '0';

    setTimeout(() => {
      element.style.display = 'none';
    }, duration);
  },

  slideDown(element, duration = 300) {
    if (!element) return;

    element.style.overflow = 'hidden';
    element.style.maxHeight = '0';
    element.style.display = 'block';

    const height = element.scrollHeight;

    requestAnimationFrame(() => {
      element.style.transition = `max-height ${duration}ms ease`;
      element.style.maxHeight = `${height}px`;
    });

    setTimeout(() => {
      element.style.maxHeight = '';
      element.style.overflow = '';
    }, duration);
  },

  slideUp(element, duration = 300) {
    if (!element) return;

    const height = element.scrollHeight;
    element.style.maxHeight = `${height}px`;
    element.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      element.style.transition = `max-height ${duration}ms ease`;
      element.style.maxHeight = '0';
    });

    setTimeout(() => {
      element.style.display = 'none';
      element.style.maxHeight = '';
      element.style.overflow = '';
    }, duration);
  },
};

export const ValidationUtils = {
  isEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  isNotEmpty(value) {
    return value.trim().length > 0;
  },

  hasMinLength(value, minLength) {
    return value.length >= minLength;
  },

  hasMaxLength(value, maxLength) {
    return value.length <= maxLength;
  },
};
