/**
 * 2つの配列の和集合を、指定された関数を適用した結果を基に算出します。
 * @param {Array} a - 最初の配列。
 * @param {Array} b - 2番目の配列。
 * @param {Function} iteratee - 各要素に適用する関数。
 * @returns {Array} 和集合の配列。
 */
export const unionBy = (a, b, iteratee) => {
  const s = new Set(a.map(iteratee));
  return a.concat(b.filter(x => !s.has(iteratee(x))));
};
