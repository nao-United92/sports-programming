/**
 * 文字列が有効なURLであるかどうかをチェックします。
 * @param {string} str - チェックする文字列。
 * @returns {boolean} 有効なURLであればtrue、そうでなければfalse。
 */
export const isURL = (str) => {
  try {
    new URL(str);
    return true;
  } catch (e) {
    return false;
  }
};
