/**
 * Creates a function that invokes `func` with `arguments` of the created function
 * grouped into an array.
 *
 * @param {Function} func The function to unspread arguments over.
 * @returns {Function} Returns the new unspread function.
 */
const unspread = (func) => {
  return function(...args) {
    return func.call(this, args);
  };
};

export { unspread };
