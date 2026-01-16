/**
 * The inverse of `arrayZip`; this method accepts an array of grouped elements
 * and creates a new array of arrays, where the first contains all first elements,
 * the second all second elements, and so on.
 *
 * @param {Array<Array>} zippedArray The array of grouped elements to unzip.
 * @returns {Array<Array>} Returns the new array of unzipped arrays.
 */
function arrayUnzip(zippedArray) {
  if (!Array.isArray(zippedArray)) {
    throw new TypeError('Expected an array for the first argument.');
  }

  if (zippedArray.length === 0) {
    return [];
  }

  const numArrays = Math.max(...zippedArray.map(arr => (Array.isArray(arr) ? arr.length : 0)));
  const result = Array.from({ length: numArrays }, () => []);

  for (let i = 0; i < zippedArray.length; i++) {
    const currentGroup = zippedArray[i];
    if (!Array.isArray(currentGroup)) {
      throw new TypeError('Expected an array of arrays.');
    }
    for (let j = 0; j < numArrays; j++) {
      result[j].push(currentGroup[j]);
    }
  }

  return result;
}

module.exports = arrayUnzip;