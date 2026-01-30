// other/practice/object-map.js
/**
 * Maps an object's values to new values using a callback function.
 * The callback function is invoked with three arguments: (value, key, object).
 *
 * @param {Object} obj The object to iterate over.
 * @param {Function} callback The function to transform each value.
 * @returns {Object} A new object with transformed values.
 * @example
 *
 * objectMap({ a: 1, b: 2 }, (value) => value * 2);
 * // => { a: 2, b: 4 }
 *
 * objectMap({ a: 1, b: 2 }, (value, key) => `${key}-${value}`);
 * // => { a: 'a-1', b: 'b-2' }
 */
function objectMap(obj, callback) {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return {}; // Or throw an error, depending on desired behavior
  }
  if (typeof callback !== 'function') {
    return { ...obj }; // Return a shallow copy if callback is not a function
  }

  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = callback(obj[key], key, obj);
    }
  }
  return newObj;
}

module.exports = objectMap;
