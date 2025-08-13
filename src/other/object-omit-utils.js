/**
 * オブジェクトから指定されたキーを削除した新しいオブジェクトを返します。
 * @param {object} obj - 処理対象のオブジェクト。
 * @param {string[]} keysToOmit - 削除するキーの配列。
 * @returns {object} 指定されたキーが削除された新しいオブジェクト。
 */
export function omit(obj, keysToOmit) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const newObj = {};
  for (const key of Object.keys(obj)) {
    if (!keysToOmit.includes(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
