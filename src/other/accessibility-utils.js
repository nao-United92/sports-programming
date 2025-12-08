let liveRegion;

function createLiveRegion(politeness = 'polite') {
  if (liveRegion) {
    // Ensure the old region is cleared before creating a new one if politeness changes
    if (liveRegion.getAttribute('aria-live') !== politeness) {
      liveRegion.parentNode.removeChild(liveRegion);
      liveRegion = null;
      liveDefinition = createLiveRegion(politeness);
    }
  }

  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', politeness);
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.style.position = 'fixed';
    // Visually hide the element
    liveRegion.style.position = 'absolute';
    liveRegion.style.width = '1px';
    liveRegion.style.height = '1px';
    liveRegion.style.margin = '-1px';
    liveRegion.style.padding = '0';
    liveRegion.style.overflow = 'hidden';
    liveRegion.style.clip = 'rect(0, 0, 0, 0)';
    liveRegion.style.whiteSpace = 'nowrap';
    liveRegion.style.border = '0';
    document.body.appendChild(liveRegion);
  }
  return liveRegion;
}

/**
 * Announces a message to screen readers using an ARIA live region.
 * @param {string} message The message to announce.
 * @param {string} [politeness='polite'] 'polite' or 'assertive'.
 */
export function announce(message, politeness = 'polite') {
  const region = createLiveRegion(politeness);

  // Clear previous message before announcing a new one
  region.textContent = '';

  // Set the new message
  region.textContent = message;
}

/**
 * Sets an ARIA attribute on an element.
 * @param {HTMLElement} element The element to modify.
 * @param {string} attribute The ARIA attribute to set (e.g., 'aria-label', 'aria-hidden').
 * @param {string} value The value for the attribute.
 */
export function setAriaAttribute(element, attribute, value) {
  element.setAttribute(attribute, value);
}

/**
 * Removes an ARIA attribute from an element.
 * @param {HTMLElement} element The element to modify.
 * @param {string} attribute The ARIA attribute to remove.
 */
export function removeAriaAttribute(element, attribute) {
  element.removeAttribute(attribute);
}
