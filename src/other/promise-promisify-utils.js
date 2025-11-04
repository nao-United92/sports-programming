
/**
 * Takes a function following the common Node.js callback-last pattern,
 * i.e., `(arg1, arg2, ..., callback)`, and returns a version that returns promises.
 *
 * @param {Function} func The function to promisify.
 * @returns {Function} A function that returns a promise.
 */
export const promisify = (func) => {
  return function(...args) {
    return new Promise((resolve, reject) => {
      const callback = (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      };

      func.apply(this, [...args, callback]);
    });
  };
};
