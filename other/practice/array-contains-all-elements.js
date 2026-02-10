/**
 * Checks if a target array contains all elements from a given subset array.
 *
 * @param {Array<any>} targetArray The array to check within.
 * @param {Array<any>} subsetArray The array of elements to look for.
 * @returns {boolean} True if all elements from subsetArray are found in targetArray, false otherwise.
 */
const arrayContainsAllElements = (targetArray, subsetArray) => {
  return subsetArray.every(element => targetArray.includes(element));
};

export default arrayContainsAllElements;
