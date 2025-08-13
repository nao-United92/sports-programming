/**
 * 文字列の指定した部分以外をマスクします。
 * @param {string | number} str - マスク対象の文字列または数値。
 * @param {number} visibleCount - 末尾から表示する文字数。
 * @param {string} maskChar - マスクに使用する文字。
 * @returns {string} マスクされた文字列。
 */
export function mask(str, visibleCount, maskChar = '*') {
  if (str === null || str === undefined) {
    return '';
  }
  const s = String(str);
  const maskedLength = s.length - visibleCount;
  if (maskedLength <= 0) {
    return s;
  }
  return maskChar.repeat(maskedLength) + s.slice(maskedLength);
}
