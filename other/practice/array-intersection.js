/**
 * Returns a new array containing elements that are common to both input arrays.
 *
 * @param {Array<any>} arr1 The first array.
 * @param {Array<any>} arr2 The second array.
 * @returns {Array<any>} A new array of common elements.
 */
const arrayIntersection = (arr1, arr2) => {
  const set1 = new Set(arr1);
  return [...new Set(arr2.filter(item => set1.has(item)))];
};

export default arrayIntersection;
