
/**
 * Checks if a DOM element is visible.
 * An element is considered visible if it has layout, is not hidden by CSS (display: none, visibility: hidden, opacity: 0),
 * and its ancestors are also visible.
 *
 * @param {HTMLElement} element The DOM element to check.
 * @returns {boolean} Returns `true` if the element is visible, `false` otherwise.
 */
export const isVisible = (element) => {
  if (!(element instanceof HTMLElement)) {
    return false;
  }

  // Check if the element itself is hidden
  if (element.offsetWidth === 0 && element.offsetHeight === 0) {
    return false;
  }

  const style = getComputedStyle(element);
  if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
    return false;
  }

  // Check if any parent element is hidden
  let currentElement = element;
  while (currentElement) {
    const parentStyle = getComputedStyle(currentElement);
    if (parentStyle.display === 'none' || parentStyle.visibility === 'hidden' || parentStyle.opacity === '0') {
      return false;
    }
    currentElement = currentElement.parentElement;
  }

  return true;
};
