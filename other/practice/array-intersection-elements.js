/**
 * Computes the intersection of multiple arrays, returning a new array
 * of elements that are common to all given arrays.
 *
 * @param {...Array<any>} arrays Any number of arrays to intersect.
 * @returns {Array<any>} A new array containing elements common to all input arrays.
 */
function arrayIntersectionElements(...arrays) {
  if (arrays.length === 0) {
    return [];
  }
  if (arrays.some(arr => !Array.isArray(arr))) {
    throw new TypeError('All arguments must be arrays.');
  }

  // Start with the first array's elements as potential candidates
  let intersectionSet = new Set(arrays[0]);

  // Iterate over the rest of the arrays
  for (let i = 1; i < arrays.length; i++) {
    const currentArray = arrays[i];
    const newIntersectionSet = new Set();

    for (const element of currentArray) {
      if (intersectionSet.has(element)) {
        newIntersectionSet.add(element);
      }
    }
    intersectionSet = newIntersectionSet; // Update the intersection for the next iteration
  }

  return Array.from(intersectionSet);
}

module.exports = arrayIntersectionElements;
