/**
 * 関数の結果をメモ化（キャッシュ）する高階関数。
 * 同じ引数での後続の呼び出しでは、キャッシュされた結果を返し、計算をスキップする。
 * @param {Function} func - 結果をメモ化する対象の関数。
 * @returns {Function} - メモ化された新しい関数。
 */
function memoize(func) {
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
}

module.exports = {
  memoize,
};
