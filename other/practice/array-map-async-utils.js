/**
 * Asynchronously maps over an array, applying an async callback function to each element.
 *
 * @param {Array<*>} arr The array to iterate over.
 * @param {Function} asyncCallback An async function to apply to each element.
 *                                 It receives (value, index, array) as arguments.
 * @returns {Promise<Array<*>>} A promise that resolves with a new array containing the results
 *                               of calling the asyncCallback on each element.
 */
const mapAsync = async (arr, asyncCallback) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof asyncCallback !== 'function') {
    throw new TypeError('Expected asyncCallback to be a function.');
  }

  const results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(await asyncCallback(arr[i], i, arr));
  }
  return results;
};

export default mapAsync;
