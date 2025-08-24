/**
 * Flattens `array` up to `depth` times.
 * @param {Array} array The array to flatten.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 */
export function flatten(array, depth = 1) {
  if (!Array.isArray(array) || depth < 0) {
    return [];
  }

  let result = [];
  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flatten(item, depth - 1));
    } else {
      result.push(item);
    }
  }
  return result;
}

/**
 * Creates an array with all falsey values removed.
 * The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of compacted values.
 */
export function compact(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.filter(Boolean);
}

/**
 * Removes all elements from `array` for which `predicate` returns truthy.
 * This function returns a new array with the removed elements. The original array is not mutated.
 *
 * @param {Array} array The array to modify.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new array of removed elements.
 */
export function removeIf(array, predicate) {
  if (!Array.isArray(array)) {
    return [];
  }

  const removed = [];
  const remaining = [];

  for (const item of array) {
    if (predicate(item)) {
      removed.push(item);
    } else {
      remaining.push(item);
    }
  }
  // Note: This implementation does not mutate the original array, it returns the removed elements.
  // If mutation of the original array is desired, a different approach would be needed.
  return removed;
}