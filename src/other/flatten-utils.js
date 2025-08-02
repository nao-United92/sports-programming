/**
 * Flattens `array` a single level deep.
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */
export function flatten(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  return [].concat(...array);
}

/**
 * Recursively flattens `array` up to `depth` times.
 * @param {Array} array The array to flatten.
 * @param {number} [depth=1] The maximum depth to flatten.
 * @returns {Array} Returns the new flattened array.
 */
export function flattenDepth(array, depth = 1) {
  if (!Array.isArray(array) || depth < 0) {
    return [];
  }

  let result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (Array.isArray(item) && depth > 0) {
      result = result.concat(flattenDepth(item, depth - 1));
    } else {
      result.push(item);
    }
  }
  return result;
}

/**
 * Recursively flattens `array`.
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */
export function flattenDeep(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (Array.isArray(item)) {
      result = result.concat(flattenDeep(item));
    } else {
      result.push(item);
    }
  }
  return result;
}