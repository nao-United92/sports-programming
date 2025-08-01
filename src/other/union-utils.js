
/**
 * Creates an array of unique values, in order, from all given arrays.
 *
 * @param {...Array} arrays The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 */
export function union(...arrays) {
  const combined = [].concat(...arrays.filter(Array.isArray));
  return [...new Set(combined)];
}
