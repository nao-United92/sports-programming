/**
 * 配列の重複する要素を削除し、新しい配列を返します。
 * @param {Array<any>} arr - 処理対象の配列。
 * @returns {Array<any>} 重複する要素が削除された新しい配列。
 */
export function unique(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return [...new Set(arr)];
}

/**
 * Creates a duplicate-free array, using a provided function to determine uniqueness.
 * @param {Array} array The array to inspect.
 * @param {Function} iteratee The function invoked per iteration to compute the criterion by which to group.
 * @returns {Array} Returns the new duplicate free array.
 */
export function uniqueBy(array, iteratee) {
  if (!Array.isArray(array)) {
    return [];
  }
  const seen = new Set();
  return array.filter(item => {
    const key = iteratee(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}
