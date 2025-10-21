/**
 * 指定された要素のテキストコンテンツを設定します。
 * @param {HTMLElement} element - テキストコンテンツを設定するDOM要素。
 * @param {string} text - 設定するテキスト。
 */
export const setTextContent = (element, text) => {
  if (element) {
    element.textContent = text;
  }
};
