
/**
 * オブジェクトのキーをアルファベット順にソートした新しいオブジェクトを返します。
 * 再帰的にソートすることも可能です。
 *
 * @param {object} obj - ソートするオブジェクト。
 * @param {object} [options] - オプション。
 * @param {boolean} [options.deep=false] - trueの場合、ネストしたオブジェクトも再帰的にソートします。
 * @returns {object} キーがソートされた新しいオブジェクト。
 */
function sortObjectKeys(obj, options = {}) {
  const { deep = false } = options;
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return obj;
  }

  const sortedKeys = Object.keys(obj).sort();
  const newObj = {};

  for (const key of sortedKeys) {
    const value = obj[key];
    if (deep && typeof value === 'object' && value !== null && !Array.isArray(value)) {
      newObj[key] = sortObjectKeys(value, options);
    } else {
      newObj[key] = value;
    }
  }

  return newObj;
}

module.exports = { sortObjectKeys };
