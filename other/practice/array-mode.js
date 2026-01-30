// other/practice/array-mode.js
/**
 * Calculates the mode(s) of an array of primitive values.
 * The mode is the value that appears most often in a set of data.
 * An array can have one mode, multiple modes, or no mode.
 *
 * @param {Array<any>} arr The array of primitive values to calculate the mode(s) for.
 * @returns {Array<any>|undefined} Returns an array of mode(s), or `undefined` if the input is invalid.
 * @example
 *
 * arrayMode([1, 2, 2, 3, 3, 3, 4]);
 * // => [3]
 *
 * arrayMode([1, 2, 2, 3, 3, 4]);
 * // => [2, 3]
 *
 * arrayMode([1, 2, 3, 4]);
 * // => [1, 2, 3, 4] (all elements appear once)
 *
 * arrayMode([]);
 * // => undefined
 */
function arrayMode(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }

  const counts = {};
  let maxCount = 0;
  arr.forEach(element => {
    counts[element] = (counts[element] || 0) + 1;
    if (counts[element] > maxCount) {
      maxCount = counts[element];
    }
  });

  const modes = [];
  for (const key in counts) {
    if (counts[key] === maxCount) {
      // Need to convert key back to original type if it was a number
      modes.push(isNaN(Number(key)) ? key : Number(key));
    }
  }

  return modes.sort((a, b) => {
    // Attempt to sort numerically if possible, otherwise string alphabetically
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    }
    return String(a).localeCompare(String(b));
  });
}

module.exports = arrayMode;
