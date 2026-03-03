/**
 * Creates an array of unique values from all given arrays.
 * 
 * @param {...Array} arrays - The arrays to inspect.
 * @returns {Array} A new array of combined unique values.
 */
export const union = (...arrays) => {
  return [...new Set(arrays.flat())];
};
