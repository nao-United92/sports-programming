/**
 * 文字列が有効なJSONかどうかをチェックします。
 * @param {*} value - チェックする値。
 * @returns {boolean} 有効なJSON文字列であればtrue、そうでなければfalse。
 */
export const isValidJson = (value) => {
  if (typeof value !== 'string') {
    return false;
  }
  try {
    JSON.parse(value);
  } catch (e) {
    return false;
  }
  return true;
};