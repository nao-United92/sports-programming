/**
 * 2つの配列の排他的論理和を、指定された関数を適用した結果を基に算出します。
 * @param {Array} a - 最初の配列。
 * @param {Array} b - 2番目の配列。
 * @param {Function} iteratee - 各要素に適用する関数。
 * @returns {Array} 排他的論理和の配列。
 */
export const xorBy = (a, b, iteratee) => {
  const sA = new Set(a.map(iteratee));
  const sB = new Set(b.map(iteratee));
  return [...a.filter(x => !sB.has(iteratee(x))), ...b.filter(x => !sA.has(iteratee(x)))];
};
