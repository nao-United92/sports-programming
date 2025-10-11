/**
 * 文字列を単語の配列に分割します。
 * @param {string} str - 分割する文字列。
 * @returns {string[]} 単語の配列。
 */
export const words = (str) => {
  return str.match(/[A-Za-z0-9]+/g) || [];
};
