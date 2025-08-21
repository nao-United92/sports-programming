/**
 * Takes a function following the common error-first callback style, i.e.,
 * `(arg1, arg2, ..., callback)` where `callback` is `(err, result)`,
 * and returns a version that returns promises.
 *
 * @param {Function} func The function to promisify.
 * @returns {Function} A new function that returns a promise.
 */
export const promisify = (func) => {
  return function(...args) {
    return new Promise((resolve, reject) => {
      const callback = (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      };

      func.apply(this, [...args, callback]);
    });
  };
};
