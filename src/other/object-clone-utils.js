/**
 * Recursively clones `value`.
 *
 * @param {*} value The value to deep clone.
 * @returns {*} Returns the deep cloned value.
 */
const cloneDeep = (value) => {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => cloneDeep(item));
  }

  if (value.constructor === Object) {
    const newObject = {};
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        newObject[key] = cloneDeep(value[key]);
      }
    }
    return newObject;
  }

  // For other object types (e.g., Date, RegExp, custom classes),
  // return a shallow copy or the original object depending on desired behavior.
  // For simplicity, we'll return the original object for now.
  return value;
};

module.exports = { cloneDeep };