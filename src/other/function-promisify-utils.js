
/**
 * Converts a callback-style function (error-first) into a function that returns a promise.
 *
 * @param {Function} func The callback-style function to promisify.
 * @returns {Function} A function that returns a promise.
 */
const promisify = (func) => {
  if (typeof func !== 'function') {
    throw new Error('Argument must be a function.');
  }

  return function(...args) {
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  };
};

module.exports = { promisify };
