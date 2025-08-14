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
