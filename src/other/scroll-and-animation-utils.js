
/**
 * Scrolls the page to the top.
 * @param {string} [behavior='smooth'] - 'smooth' or 'auto'.
 */
export function scrollToTop(behavior = 'smooth') {
  window.scrollTo({
    top: 0,
    behavior: behavior,
  });
}

/**
 * Smoothly scrolls to a target element.
 * @param {string|HTMLElement} target - A CSS selector or an HTML element.
 */
export function smoothScrollTo(target) {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

/**
 * Checks if an element is in the viewport.
 * @param {HTMLElement} element The element to check.
 * @returns {boolean} True if the element is in the viewport, false otherwise.
 */
export function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Executes a callback once when an element enters the viewport.
 * Uses IntersectionObserver for performance.
 * @param {HTMLElement} element The element to observe.
 * @param {Function} callback The function to call when the element is in view.
 * @param {object} [options] IntersectionObserver options (e.g., { rootMargin: '0px', threshold: 0.1 }).
 * @returns {IntersectionObserver} The observer instance, so you can disconnect it if needed.
 */
export function onViewportEnter(element, callback, options = { threshold: 0.1 }) {
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observerInstance.unobserve(entry.target); // Stop observing once it has been triggered
      }
    });
  }, options);

  observer.observe(element);
  return observer;
}
