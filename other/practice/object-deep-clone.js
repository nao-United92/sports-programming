/**
 * Creates a deep clone of a value.
 * @param {*} value - The value to clone.
 * @returns {*} - The cloned value.
 */
function deepClone(value) {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  const result = {};
  Object.keys(value).forEach((key) => {
    result[key] = deepClone(value[key]);
  });
  return result;
}

module.exports = deepClone;
