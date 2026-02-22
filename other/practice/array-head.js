
/**
 * Gets the first element of array.
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of array.
 */
function head(array) {
  return (array && array.length) ? array[0] : undefined;
}

module.exports = head;
