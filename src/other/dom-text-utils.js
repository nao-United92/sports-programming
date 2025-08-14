/**
 * 指定されたDOM要素のテキストコンテンツを設定します。
 * @param {HTMLElement} element - テキストコンテンツを設定するDOM要素。
 * @param {string | number} text - 設定するテキストコンテンツ。
 */
export function setTextContent(element, text) {
  if (!(element instanceof HTMLElement)) {
    console.warn('Invalid element provided to setTextContent.', element);
    return;
  }
  element.textContent = text === null || text === undefined ? '' : String(text);
}
