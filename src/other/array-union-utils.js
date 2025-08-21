/**
 * Creates an array of unique values, in order, from all given arrays.
 *
 * @param {...Array} arrays The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 */
export const union = (...arrays) => {
  const combined = [].concat(...arrays);
  return [...new Set(combined)];
};
