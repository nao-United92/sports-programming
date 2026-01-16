/**
 * Checks if two arrays contain the same elements, ignoring their order.
 * This function performs a shallow comparison of elements.
 *
 * @param {Array} arr1 The first array.
 * @param {Array} arr2 The second array.
 * @returns {boolean} True if the arrays contain the same elements, false otherwise.
 */
function arrayEqualsIgnoreOrder(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError('Expected both arguments to be arrays.');
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  const sortedArr1 = [...arr1].sort();
  const sortedArr2 = [...arr2].sort();

  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }

  return true;
}

module.exports = arrayEqualsIgnoreOrder;
