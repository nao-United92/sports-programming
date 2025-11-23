/**
 * Gets the value at a nested path of an object.
 * @param {object} obj The object to query.
 * @param {string} path The path of the property to retrieve.
 * @returns {*} Returns the resolved value, else `undefined`.
 */
const get = (obj, path) => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the key.
 * This version works with deep (nested) properties.
 *
 * @param {Array} collection The collection to iterate over.
 * @param {string} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 */
export const groupByDeep = (collection, iteratee) => {
  if (!Array.isArray(collection)) {
    return {};
  }
  return collection.reduce((acc, item) => {
    const key = get(item, iteratee);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};
