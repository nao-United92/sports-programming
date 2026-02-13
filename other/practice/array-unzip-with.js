/**
 * This function is like `unzip` except that it accepts `iteratee` to specify how grouped values should be combined.
 * The iteratee is invoked with the elements of each group: (...group).
 *
 * @param {Array<Array>} array The array of grouped elements to process.
 * @param {Function} [iteratee=Array] The function to combine grouped values.
 * @returns {Array} Returns the new array of regrouped elements.
 */
const unzipWith = (array, iteratee = (...group) => group) => {
  if (!array || array.length === 0) {
    return [];
  }

  // First, perform the 'unzip' operation (transpose the matrix)
  const result = [];
  const numRows = array.length;
  // Determine the maximum length among all inner arrays to handle ragged arrays
  const maxLength = Math.max(...array.map(innerArr => (Array.isArray(innerArr) ? innerArr.length : 0)));


  for (let i = 0; i < maxLength; i++) { // i iterates over column index
    const column = [];
    for (let j = 0; j < numRows; j++) { // j iterates over row index
      // Push the element at the current column index from each row
      column.push(array[j][i]);
    }
    result.push(column);
  }

  // Now, apply the iteratee to each of the generated columns (which are now rows in `result`)
  return result.map(column => iteratee(...column));
};

export default unzipWith;