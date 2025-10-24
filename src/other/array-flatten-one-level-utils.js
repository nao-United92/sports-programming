
/**
 * Flattens a nested array up to one level deep.
 *
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */
export const flatten = (array) => {
  if (!Array.isArray(array)) {
    return [];
  }

  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result.push(...array[i]);
    } else {
      result.push(array[i]);
    }
  }
  return result;
};
