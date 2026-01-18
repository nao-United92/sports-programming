// other/practice/array-head-utils.js

const arrayFirst = require('./array-first-utils');

/**
 * Gets the first element of `array`.
 * This is an alias for `arrayFirst`.
 *
 * @param {Array} arr The array to query.
 * @returns {*} Returns the first element of `array`.
 */
function arrayHead(arr) {
  return arrayFirst(arr);
}

module.exports = arrayHead;
