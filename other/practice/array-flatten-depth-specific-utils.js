/**
 * Flattens an array up to the specified depth.
 *
 * @param {Array} arr The array to flatten.
 * @param {number} [depth=1] The maximum depth to flatten. Defaults to 1.
 * @returns {Array} A new array with the sub-array elements concatenated into it recursively up to the specified depth.
 */
function arrayFlattenDepthSpecific(arr, depth = 1) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof depth !== 'number' || depth < 0) {
    throw new TypeError('Expected depth to be a non-negative number.');
  }

  if (depth === 0) {
    return Array.from(arr); // Return a shallow copy if depth is 0
  }

  let result = [];
  function flatten(currentArr, currentDepth) {
    for (let i = 0; i < currentArr.length; i++) {
      const item = currentArr[i];
      if (Array.isArray(item) && currentDepth < depth) {
        flatten(item, currentDepth + 1);
      } else {
        result.push(item);
      }
    }
  }

  flatten(arr, 0);
  return result;
}

module.exports = arrayFlattenDepthSpecific;
