
const focusableElementSelector = [
  'a[href]',
  'button:not([disabled])',
  'area[href]',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'iframe',
  '[tabindex]',
  '[contenteditable]',
].join(', ');

let previouslyFocusedElement;

/**
 * Returns an array of focusable elements within a given element.
 * @param {HTMLElement} element The parent element to search within.
 * @returns {HTMLElement[]} An array of focusable elements.
 */
export function getFocusableElements(element) {
  return Array.from(element.querySelectorAll(focusableElementSelector));
}

/**
 * Saves the currently focused element.
 */
export function saveFocus() {
  previouslyFocusedElement = document.activeElement;
}

/**
 * Restores focus to the last saved element.
 */
export function restoreFocus() {
  if (previouslyFocusedElement && previouslyFocusedElement.focus) {
    previouslyFocusedElement.focus();
    previouslyFocusedElement = null;
  }
}

/**
 * Traps focus within a given element.
 * @param {HTMLElement} element The element to trap focus within.
 * @returns {Function} A cleanup function to remove the event listener.
 */
export function trapFocus(element) {
  const focusableElements = getFocusableElements(element);
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  const handleKeyDown = (event) => {
    if (event.key !== 'Tab') {
      return;
    }

    if (event.shiftKey) { // Shift + Tab
      if (document.activeElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
      }
    } else { // Tab
      if (document.activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    }
  };

  element.addEventListener('keydown', handleKeyDown);

  // Return a cleanup function
  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
}
