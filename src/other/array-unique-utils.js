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

/**
 * Creates a duplicate-free array, based on the value of a specified key in each object.
 * @param {Array<object>} array The array of objects to inspect.
 * @param {string} key The key whose value will be used to determine uniqueness.
 * @returns {Array<object>} Returns the new duplicate free array.
 */
export function uniqueByKey(array, key) {
  if (!Array.isArray(array)) {
    return [];
  }
  const seen = new Set();
  return array.filter(item => {
    if (item === null || typeof item !== 'object' || !item.hasOwnProperty(key)) {
      return true; // Keep items that are not objects or don't have the key
    }
    const value = item[key];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
}

