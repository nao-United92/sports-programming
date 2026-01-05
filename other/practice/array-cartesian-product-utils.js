/**
 * Computes the Cartesian product of one or more arrays.
 *
 * @param {...Array<Array>} arrays An array of arrays to compute the Cartesian product of.
 * @returns {Array<Array>} A new array representing the Cartesian product.
 */
const cartesianProduct = (...arrays) => {
  if (arrays.some(arr => !Array.isArray(arr))) {
    throw new TypeError('Expected all arguments to be arrays.');
  }
  if (arrays.some(arr => arr.length === 0)) {
    return []; // Cartesian product with an empty array is an empty array
  }

  return arrays.reduce((acc, currentArray) => {
    return acc.flatMap(accItem => {
      return currentArray.map(currentItem => {
        return [...accItem, currentItem];
      });
    });
  }, [[]]);
};

export default cartesianProduct;
