/**
 * Creates an array of unique values that are included in all given arrays.
 * 
 * @param {...Array} arrays - The arrays to inspect.
 * @returns {Array} A new array of intersecting values.
 */
export const intersection = (...arrays) => {
  if (arrays.length === 0) return [];
  return arrays.reduce((acc, current) => {
    return acc.filter(value => current.includes(value));
  });
};
