// other/practice/array-flatten-shallow-utils.js

/**
 * Flattens an array a single level deep.
 *
 * @param {Array} arr The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */
function arrayFlattenShallow(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  // Using flat() method for modern JavaScript
  // If older environments need support, a manual concat loop would be used:
  // let result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (Array.isArray(arr[i])) {
  //     result.push(...arr[i]);
  //   } else {
  //     result.push(arr[i]);
  //   }
  // }
  // return result;
  return arr.flat(1); // Flatens one level
}

module.exports = arrayFlattenShallow;
