
/**
 * This method is like `pullAll` except that it accepts `iteratee` which is
 * invoked for each element of `array` and `values` to generate the criterion
 * by which they're compared. The iteratee is invoked with one argument: (value).
 *
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns `array`.
 */
export const pullAllBy = (array, values, iteratee) => {
  if (!Array.isArray(array) || !Array.isArray(values)) {
    return array;
  }

  const mappedValues = values.map(iteratee);

  let index = -1;
  let lastIndex = array.length - 1;

  while (++index <= lastIndex) {
    const value = array[index];
    if (mappedValues.includes(iteratee(value))) {
      array.splice(index--, 1);
      lastIndex--;
    }
  }
  return array;
};
