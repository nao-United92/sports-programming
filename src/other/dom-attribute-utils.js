/**
 * 指定されたDOM要素の属性の値を安全に取得します。
 * @param {HTMLElement} element - 属性を取得するDOM要素。
 * @param {string} attributeName - 取得する属性の名前。
 * @returns {string | null} 属性の値。要素が存在しない、または属性が存在しない場合はnull。
 */
export function getAttribute(element, attributeName) {
  if (!(element instanceof HTMLElement)) {
    console.warn('Invalid element provided to getAttribute.', element);
    return null;
  }
  return element.getAttribute(attributeName);
}
