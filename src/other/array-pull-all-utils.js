
/**
 * Removes all given values from `array` using `SameValueZero` for equality comparisons.
 *
 * **Note:** Unlike `pull`, this method returns the modified array.
 *
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @returns {Array} Returns `array`.
 */
export const pullAll = (array, values) => {
  if (!Array.isArray(array) || !Array.isArray(values)) {
    return array;
  }

  let index = -1;
  let lastIndex = array.length - 1;

  while (++index <= lastIndex) {
    const value = array[index];
    if (values.includes(value)) {
      array.splice(index--, 1);
      lastIndex--;
    }
  }
  return array;
};
