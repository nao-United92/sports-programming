/**
 * Creates a deep clone of a value.
 *
 * @param {*} value - The value to deep clone.
 * @returns {*} The deep cloned value.
 */
export const deepClone = (value) => {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(item => deepClone(item));
  }

  const result = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      result[key] = deepClone(value[key]);
    }
  }
  return result;
};
