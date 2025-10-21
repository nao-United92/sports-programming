/**
 * 関数の結果をメモ化（キャッシュ）します。
 * @param {Function} func - メモ化する関数。
 * @returns {Function} メモ化された関数。
 */
export const memoize = (func) => {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
};
