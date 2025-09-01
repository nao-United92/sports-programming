
/**
 * オブジェクトのキーを再帰的にソートする
 * @param {any} obj - ソート対象のオブジェクト
 * @returns {any} - キーがソートされた新しいオブジェクト
 */
export function sortKeysRecursively(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(sortKeysRecursively);
  }

  const sortedKeys = Object.keys(obj).sort();
  const newObj = {};

  for (const key of sortedKeys) {
    newObj[key] = sortKeysRecursively(obj[key]);
  }

  return newObj;
}
