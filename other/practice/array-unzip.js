// other/practice/array-unzip.js
/**
 * The inverse of `arrayZip`; this method accepts an array of grouped elements
 * and creates an array of arrays, where the first contains all first elements,
 * the second contains all second elements, and so on.
 *
 * @param {Array<Array>} zippedArray The array of grouped elements to unzip.
 * @returns {Array<Array>} Returns the new array of unzipped arrays.
 * @example
 *
 * arrayUnzip([['a', 1, true], ['b', 2, false]]);
 * // => [['a', 'b'], [1, 2], [true, false]]
 *
 * arrayUnzip([['a', 1], ['b', 2], ['c', undefined]]);
 * // => [['a', 'b', 'c'], [1, 2, undefined]]
 */
function arrayUnzip(zippedArray) {
  if (!Array.isArray(zippedArray) || zippedArray.length === 0) {
    return [];
  }

  // Determine the number of arrays in the output based on the length of the first inner array
  // If the inner arrays can have different lengths, find the max length among them.
  // Assuming all inner arrays have similar structure for `unzip`
  const maxInnerLength = Math.max(...zippedArray.map(item => (Array.isArray(item) ? item.length : 0)));

  if (maxInnerLength === 0) {
    return []; // If all inner arrays are empty, return empty array
  }

  const result = Array.from({ length: maxInnerLength }, () => []);

  for (let i = 0; i < zippedArray.length; i++) {
    const innerArray = zippedArray[i];
    if (Array.isArray(innerArray)) {
      for (let j = 0; j < maxInnerLength; j++) {
        result[j].push(innerArray[j]);
      }
    } else {
        // If an element in zippedArray is not an array, push undefined to all result arrays
        for (let j = 0; j < maxInnerLength; j++) {
            result[j].push(undefined);
        }
    }
  }

  return result;
}

module.exports = arrayUnzip;
