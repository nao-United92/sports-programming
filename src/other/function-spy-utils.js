/**
 * Creates a spy function that wraps a given function to track its calls.
 *
 * @param {Function} fn The function to spy on.
 * @returns {Function} A new function that acts as a spy.
 * The spy function has properties to inspect its usage:
 * - `calls`: An array of arrays, where each inner array contains the arguments for a call.
 * - `callCount`: The number of times the function has been called.
 */
const spyOn = (fn) => {
  const spy = function(...args) { // Use a function expression to get `this`
    spy.calls.push(args);
    return fn.apply(this, args); // Use apply to preserve `this` context
  };

  spy.calls = [];
  Object.defineProperty(spy, 'callCount', {
    get: function() {
      return this.calls.length;
    }
  });

  return spy;
};

module.exports = {
  spyOn,
};
