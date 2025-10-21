/**
 * 指定された要素の属性を削除します。
 * @param {HTMLElement} element - 属性を削除するDOM要素。
 * @param {string} attributeName - 削除する属性名。
 */
export const removeAttribute = (element, attributeName) => {
  if (element && attributeName) {
    element.removeAttribute(attributeName);
  }
};
