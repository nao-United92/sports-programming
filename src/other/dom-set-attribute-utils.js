/**
 * 指定された要素の属性値を設定します。
 * @param {HTMLElement} element - 属性値を設定するDOM要素。
 * @param {string} attributeName - 設定する属性名。
 * @param {string} value - 設定する属性値。
 */
export const setAttribute = (element, attributeName, value) => {
  if (element && attributeName) {
    element.setAttribute(attributeName, value);
  }
};
