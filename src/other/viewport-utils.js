
/**
 * 要素がビューポート内に表示されているかを確認します。
 * @param {Element} el - 確認する要素。
 * @param {boolean} partiallyVisible - 部分的に表示されている場合もtrueとするか。
 * @returns {boolean} - 要素がビューポート内に表示されている場合はtrue、そうでない場合はfalse。
 */
export function isElementInViewport(el, partiallyVisible = false) {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerWidth, innerHeight } = window;
  if (partiallyVisible) {
    return (
      ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight) ||
        (top < 0 && bottom > innerHeight)) &&
      ((left > 0 && left < innerWidth) ||
        (right > 0 && right < innerWidth) ||
        (left < 0 && right > innerWidth))
    );
  }
  return top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}
