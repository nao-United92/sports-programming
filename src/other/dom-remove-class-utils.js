/**
 * 指定された要素からクラスを削除します。
 * @param {HTMLElement} element - クラスを削除するDOM要素。
 * @param {string} className - 削除するクラス名。
 */
export const removeClass = (element, className) => {
  if (element && className) {
    element.classList.remove(className);
  }
};
