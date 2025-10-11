/**
 * 指定された要素の属性値を取得します。
 * @param {HTMLElement} element - 属性値を取得するDOM要素。
 * @param {string} attributeName - 取得する属性名。
 * @returns {string|null} 属性値。存在しない場合はnull。
 */
export const getAttribute = (element, attributeName) => {
  if (element && attributeName) {
    return element.getAttribute(attributeName);
  }
  return null;
};
