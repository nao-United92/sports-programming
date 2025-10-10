/**
 * Flattens a nested array one level deep.
 * @param {Array} arr The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */
const flatten = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  // The spread operator with concat is a simple way to flatten one level.
  return [].concat(...arr);
};

/**
 * Recursively flattens a nested array.
 * @param {Array} arr The array to flatten.
 * @returns {Array} Returns the new deeply flattened array.
 */
const flattenDeep = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
};

/**
 * Recursively flattens array up to `depth` times.
 * @param {Array} arr The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 */
const flattenDepth = (arr, depth) => {
  if (!Array.isArray(arr) || depth < 1) {
    return arr.slice();
  }

  return arr.reduce((acc, val) => {
    if (Array.isArray(val) && depth > 0) {
      return acc.concat(flattenDepth(val, depth - 1));
    } else {
      return acc.concat(val);
    }
  }, []);
};

module.exports = { flatten, flattenDeep, flattenDepth };
