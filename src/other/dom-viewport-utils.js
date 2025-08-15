/**
 * 指定されたDOM要素がビューポート内に表示されているかを判定します。
 * @param {HTMLElement} element - 判定するDOM要素。
 * @returns {boolean} 要素がビューポート内に表示されていればtrue、そうでなければfalse。
 */
export function isInViewport(element) {
  if (!(element instanceof HTMLElement)) {
    console.warn('Invalid element provided to isInViewport.', element);
    return false;
  }

  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * 指定されたDOM要素が部分的にでもビューポート内に表示されているかを判定します。
 * @param {HTMLElement} element - 判定するDOM要素。
 * @returns {boolean} 要素が部分的にでもビューポート内に表示されていればtrue、そうでなければfalse。
 */
export function isElementPartiallyInViewport(element) {
  if (!(element instanceof HTMLElement)) {
    console.warn('Invalid element provided to isElementPartiallyInViewport.', element);
    return false;
  }

  const rect = element.getBoundingClientRect();
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;

  const vertInView = rect.top <= viewHeight && rect.bottom >= 0;
  const horInView = rect.left <= viewWidth && rect.right >= 0;

  return vertInView && horInView;
}

/**
 * 現在のスクロール位置を取得します。
 * @returns {{x: number, y: number}} スクロール位置のx座標とy座標。
 */
export function getScrollPosition() {
  return { x: window.pageXOffset, y: window.pageYOffset };
}
