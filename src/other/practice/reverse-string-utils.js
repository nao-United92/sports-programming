/**
 * 文字列を逆にする
 * @param {string} str - 逆にする文字列
 * @returns {string} - 逆になった文字列
 */
export function reverseString(str) {
  return str.split('').reverse().join('');
}
