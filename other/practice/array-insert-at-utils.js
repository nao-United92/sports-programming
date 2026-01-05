/**
 * Inserts an element into an array at a specified index.
 * Returns a new array with the element inserted without mutating the original array.
 *
 * @param {Array} arr The original array.
 * @param {number} index The index at which to insert the element.
 * @param {*} element The element to insert.
 * @returns {Array} A new array with the element inserted.
 */
const insertAt = (arr, index, element) => {
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
    element,
    ...arr.slice(effectiveIndex)
  ];
};

export default insertAt;
