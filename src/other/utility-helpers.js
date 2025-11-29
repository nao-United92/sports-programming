// src/other/utility-helpers.js

/**
 * Composes functions from left to right, passing the output of one function
 * as the input to the next.
 *
 * @param {...Function} fns The functions to compose.
 * @returns {Function} A new function that takes an initial value and pipes it through the composed functions.
 */
const pipe = (...fns) => (initialValue) =>
  fns.reduce((acc, fn) => fn(acc), initialValue);

module.exports = {
  pipe,
};
