/**
 * Calculates the absolute position of an HTML element relative to the document.
 * This takes into account any scrolling of the document itself.
 *
 * @param {HTMLElement} element The HTML element to get the position for.
 * @returns {{x: number, y: number}} An object with x and y coordinates.
 */
export function getElementAbsolutePosition(element) {
  if (!element || !(element instanceof HTMLElement)) {
    throw new Error('Invalid argument: element must be an HTMLElement.');
  }

  const rect = element.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return {
    x: rect.left + scrollLeft,
    y: rect.top + scrollTop,
  };
}
