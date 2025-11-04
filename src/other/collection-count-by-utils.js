
/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the number of times the key was returned by `iteratee`.
 * The iteratee is invoked with one argument: (value).
 *
 * @param {Array|object} collection The collection to iterate over.
 * @param {Function} iteratee The iteratee to transform keys.
 * @returns {object} Returns the composed aggregate object.
 */
export const countBy = (collection, iteratee) => {
  const result = {};
  const array = Array.isArray(collection) ? collection : Object.values(collection);

  array.forEach(item => {
    const key = iteratee(item);
    result[key] = (result[key] || 0) + 1;
  });
  return result;
};
