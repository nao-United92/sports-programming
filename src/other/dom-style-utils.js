/**
 * 指定されたDOM要素のスタイルプロパティを設定します。
 * @param {HTMLElement} element - スタイルを設定するDOM要素。
 * @param {string} property - 設定するスタイルプロパティ名（例: 'color', 'backgroundColor'）。
 * @param {string} value - 設定するスタイルプロパティの値。
 */
export function setStyle(element, property, value) {
  if (!(element instanceof HTMLElement)) {
    console.warn('Invalid element provided to setStyle.', element);
    return;
  }
  if (typeof property !== 'string' || property.length === 0) {
    console.warn('Invalid style property name provided to setStyle.', property);
    return;
  }
  element.style[property] = value;
}
