/**
 * Finds common elements across multiple arrays.
 *
 * @param {...Array} arrays The arrays to inspect.
 * @returns {Array} A new array containing elements common to all given arrays.
 */
function arrayFindCommonElements(...arrays) {
  if (arrays.length === 0) {
    return [];
  }

  for (const arr of arrays) {
    if (!Array.isArray(arr)) {
      throw new TypeError('Expected all arguments to be arrays.');
    }
  }

  // Start with the first array's unique elements
  let commonElements = new Set(arrays[0]);

  // Iterate over the rest of the arrays
  for (let i = 1; i < arrays.length; i++) {
    const currentArraySet = new Set(arrays[i]);
    const nextCommonElements = new Set();
    
    for (const element of commonElements) {
      if (currentArraySet.has(element)) {
        nextCommonElements.add(element);
      }
    }
    commonElements = nextCommonElements;
  }

  return Array.from(commonElements);
}

module.exports = arrayFindCommonElements;
