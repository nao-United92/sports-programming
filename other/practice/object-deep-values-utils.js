/**
 * Recursively extracts all values from an object, including nested objects.
 *
 * @param {object} obj The object to extract values from.
 * @returns {Array} An array containing all values from the object.
 */
const deepValues = (obj) => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    throw new TypeError('Expected a non-array object for the first argument.');
  }

  let values = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        values = values.concat(deepValues(value));
      } else {
        values.push(value);
      }
    }
  }
  return values;
};

export default deepValues;
