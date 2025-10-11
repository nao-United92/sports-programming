/**
 * 指定された要素が特定の属性を持っているかを判定します。
 * @param {HTMLElement} element - 判定するDOM要素。
 * @param {string} attributeName - 判定する属性名。
 * @returns {boolean} 属性を持っていればtrue、そうでなければfalse。
 */
export const hasAttribute = (element, attributeName) => {
  if (element && attributeName) {
    return element.hasAttribute(attributeName);
  }
  return false;
};
