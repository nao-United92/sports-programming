/**
 * The opposite of `filter`; this method returns the elements of array that predicate does NOT return truthy for.
 * 
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
export const reject = (array, predicate) => {
  return array.filter((value, index, arr) => !predicate(value, index, arr));
};
