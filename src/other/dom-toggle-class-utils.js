/**
 * 指定された要素のクラスをトグルします。
 * @param {HTMLElement} element - クラスをトグルするDOM要素。
 * @param {string} className - トグルするクラス名。
 */
export const toggleClass = (element, className) => {
  if (element && className) {
    element.classList.toggle(className);
  }
};
