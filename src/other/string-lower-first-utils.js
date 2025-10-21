/**
 * 文字列の最初の文字を小文字に変換します。
 * @param {string} str - 変換する文字列。
 * @returns {string} 最初の文字が小文字に変換された文字列。
 */
export const lowerFirst = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toLowerCase() + str.slice(1);
};
