const originalDisplay = new WeakMap();

/**
 * Toggles the visibility of a DOM element.
 * If the element is currently visible, it will be hidden (display: 'none').
 * If the element is currently hidden, it will be shown using its original display style.
 *
 * @param {HTMLElement} element The DOM element to toggle visibility for.
 */
export const toggleVisibility = (element) => {
  if (!(element instanceof HTMLElement)) {
    console.warn('toggleVisibility: Invalid element provided.', element);
    return;
  }

  if (element.style.display === 'none') {
    // Element is hidden, show it
    element.style.display = originalDisplay.get(element) || ''; // Restore original or default
    originalDisplay.delete(element);
  } else {
    // Element is visible, hide it
    originalDisplay.set(element, element.style.display); // Store original display
    element.style.display = 'none';
  }
};
