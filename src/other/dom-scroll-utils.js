/**
 * Smoothly scrolls the page to the specified element.
 *
 * @param {string} elementSelector The CSS selector of the element to scroll to.
 */
export const smoothScroll = (elementSelector) => {
  const element = document.querySelector(elementSelector);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
};

/**
 * Checks if an element is in the viewport.
 *
 * @param {Element} el The element to check.
 * @returns {boolean} True if the element is in the viewport, false otherwise.
 */
export const isElementInViewport = (el) => {
  if (!el) {
    return false;
  }
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * 指定されたDOM要素までスムーズにスクロールします。
 * @param {HTMLElement} element - スクロール先のDOM要素。
 * @param {ScrollIntoViewOptions} [options] - scrollIntoViewメソッドに渡すオプション。
 *   例: { behavior: 'smooth', block: 'start', inline: 'nearest' }
 */
export function scrollToElement(element, options = { behavior: 'smooth' }) {
  if (!(element instanceof HTMLElement)) {
    console.warn('Invalid element provided to scrollToElement.', element);
    return;
  }
  element.scrollIntoView(options);
}
