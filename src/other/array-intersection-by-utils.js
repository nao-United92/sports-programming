/**
 * 2つの配列の共通部分を、指定された関数を適用した結果を基に算出します。
 * @param {Array} a - 最初の配列。
 * @param {Array} b - 2番目の配列。
 * @param {Function} iteratee - 各要素に適用する関数。
 * @returns {Array} 共通部分の配列。
 */
export const intersectionBy = (a, b, iteratee) => {
  const s = new Set(b.map(iteratee));
  return a.filter(x => s.has(iteratee(x)));
};
