// other/practice/object-filter.js
/**
 * Filters an object's properties based on a predicate function.
 * The callback function is invoked with three arguments: (value, key, object).
 * Properties for which the predicate returns a truthy value are kept.
 *
 * @param {Object} obj The object to iterate over.
 * @param {Function} predicate The function to test each property.
 * @returns {Object} A new object with filtered properties.
 * @example
 *
 * objectFilter({ a: 1, b: 2, c: 3 }, (value) => value % 2 === 1);
 * // => { a: 1, c: 3 }
 *
 * objectFilter({ name: 'Alice', age: 30 }, (value, key) => key === 'name');
 * // => { name: 'Alice' }
 */
function objectFilter(obj, predicate) {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return {}; // Or throw an error, depending on desired behavior
  }
  if (typeof predicate !== 'function') {
    return {}; // Return empty object if predicate is not a function
  }

  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (predicate(obj[key], key, obj)) {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
}

module.exports = objectFilter;
