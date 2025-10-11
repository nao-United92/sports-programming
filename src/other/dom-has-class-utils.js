/**
 * 指定された要素が特定のクラスを持っているかを判定します。
 * @param {HTMLElement} element - 判定するDOM要素。
 * @param {string} className - 判定するクラス名。
 * @returns {boolean} クラスを持っていればtrue、そうでなければfalse。
 */
export const hasClass = (element, className) => {
  if (element && className) {
    return element.classList.contains(className);
  }
  return false;
};
