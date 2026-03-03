/**
 * Merges two or more objects into a single object.
 * @param {...object} objects
 * @returns {object} The merged object.
 */
const merge = (...objects) => {
  return objects.reduce((acc, obj) => {
    if (obj === null || typeof obj !== 'object') return acc;
    return Object.keys(obj).reduce((innerAcc, key) => {
      innerAcc[key] = obj[key];
      return innerAcc;
    }, acc);
  }, {});
};

module.exports = merge;
