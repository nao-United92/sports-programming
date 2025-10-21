/**
 * 指定された要素にクラスを追加します。
 * @param {HTMLElement} element - クラスを追加するDOM要素。
 * @param {string} className - 追加するクラス名。
 */
export const addClass = (element, className) => {
  if (element && className) {
    element.classList.add(className);
  }
};
