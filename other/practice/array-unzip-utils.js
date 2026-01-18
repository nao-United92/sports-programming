// other/practice/array-unzip-utils.js

/**
 * The inverse of `arrayZip`; this method accepts an array of grouped elements
 * and creates an array of arrays, regrouping elements to their original array positions.
 *
 * @param {Array<Array>} zippedArray The array of grouped elements to unzip.
 * @returns {Array<Array>} Returns the new array of ungrouped arrays.
 */
function arrayUnzip(zippedArray) {
  if (!Array.isArray(zippedArray) || zippedArray.length === 0) {
    return [];
  }

  // If the first inner array is empty, it means all original arrays were empty.
  // In this case, the number of original arrays is equal to the length of zippedArray.
  // Example: arrayZip([], [], []) => [[], [], []]
  // Then arrayUnzip([[], [], []]) should return [[], [], []]
  if (zippedArray[0].length === 0) {
    return Array.from({ length: zippedArray.length }, () => []);
  }


  // Determine the number of arrays to "unzip" into
  // This is the length of the first inner array
  const numArrays = zippedArray[0].length;

  const result = Array.from({ length: numArrays }, () => []);

  zippedArray.forEach(group => {
    group.forEach((item, index) => {
      if (result[index]) { // Ensure index exists, though it should based on numArrays
        result[index].push(item);
      }
    });
  });

  return result;
}

module.exports = arrayUnzip;