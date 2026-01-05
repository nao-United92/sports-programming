/**
 * Returns the number of enumerable own properties of an object.
 *
 * @param {object} obj The object to query.
 * @returns {number} The number of enumerable own properties.
 */
const objectSize = (obj) => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    throw new TypeError('Expected a non-array object for the first argument.');
  }
  return Object.keys(obj).length;
};

export default objectSize;
