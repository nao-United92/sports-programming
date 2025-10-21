/**
 * 文字列の一部をマスクします。
 * @param {string} str - マスクする文字列。
 * @param {number} numVisible - 表示する文字数（先頭から）。
 * @param {string} [maskChar='*'] - マスクに使用する文字。
 * @returns {string} マスクされた文字列。
 */
export const mask = (str, numVisible, maskChar = '*') => {
  if (str === null || str === undefined) {
    return '';
  }
  str = String(str);
  const strLen = str.length;
  if (numVisible >= strLen) {
    return str;
  }
  const maskedStr = str.slice(0, numVisible) + maskChar.repeat(strLen - numVisible);
  return maskedStr;
};
