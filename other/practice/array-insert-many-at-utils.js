/**
 * Inserts multiple elements into an array at a specified index.
 * Returns a new array with the elements inserted without mutating the original array.
 *
 * @param {Array} arr The original array.
 * @param {number} index The index at which to insert the elements.
 * @param {...*} elements The elements to insert.
 * @returns {Array} A new array with the elements inserted.
 */
const insertManyAt = (arr, index, ...elements) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof index !== 'number' || !Number.isInteger(index)) {
    throw new TypeError('Expected index to be an integer.');
  }

  // Handle negative indices (relative to the end of the array)
  let effectiveIndex = index < 0 ? arr.length + index : index;

  // Ensure index is within bounds [0, arr.length]
  effectiveIndex = Math.max(0, Math.min(effectiveIndex, arr.length));

  return [
    ...arr.slice(0, effectiveIndex),
    ...elements,
    ...arr.slice(effectiveIndex)
  ];
};

export default insertManyAt;
