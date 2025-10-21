/**
 * 文字列の最初の文字を大文字に変換します。
 * @param {string} str - 変換する文字列。
 * @returns {string} 最初の文字が大文字に変換された文字列。
 */
export const upperFirst = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};