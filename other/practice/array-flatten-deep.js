/**
 * Recursively flattens a nested array.
 *
 * @param {Array<any>} array The array to deep flatten.
 * @returns {Array<any>} A new array with all levels of nesting removed.
 */
const arrayFlattenDeep = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(arrayFlattenDeep(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

export default arrayFlattenDeep;
