/**
 * Recursively clones `value`.
 *
 * @param {*} value The value to deep clone.
 * @returns {*} Returns the deep cloned value.
 */
function deepClone(value) {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    const copy = [];
    for (let i = 0; i < value.length; i++) {
      copy[i] = deepClone(value[i]);
    }
    return copy;
  }

  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (value instanceof RegExp) {
    return new RegExp(value);
  }

  const copy = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      copy[key] = deepClone(value[key]);
    }
  }
  return copy;
}

module.exports = { deepClone };