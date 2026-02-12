/**
 * Creates an array of unique values, in order, from all given arrays.
 *
 * @param {...Array} arrays The arrays to inspect.
 * @returns {Array} Returns the new array of unique values.
 */
function union(...arrays) {
  const flattened = arrays.reduce((acc, curr) => acc.concat(curr), []);
  return [...new Set(flattened)];
}

export { union };
