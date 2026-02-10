/**
 * Flattens a nested array by one level.
 *
 * @param {Array<any>} array The array to flatten.
 * @returns {Array<any>} A new array with one level of nesting removed.
 */
const arrayFlatten = (array) => {
  return [].concat(...array);
};

export default arrayFlatten;
