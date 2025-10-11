/**
 * 2つの配列の差分を、指定された関数を適用した結果を基に算出します。
 * @param {Array} arr1 - 最初の配列。
 * @param {Array} arr2 - 2番目の配列。
 * @param {Function} iteratee - 各要素に適用する関数。
 * @returns {Array} 差分の配列。
 */
export const differenceBy = (arr1, arr2, iteratee) => {
  const s = new Set(arr2.map(iteratee));
  return arr1.filter(x => !s.has(iteratee(x)));
};
