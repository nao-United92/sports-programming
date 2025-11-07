/**
 * Creates a deep clone of a value.
 *
 * @param {*} value The value to clone.
 * @returns {*} Returns the deep cloned value.
 */
export const deepClone = (value) => {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (value instanceof RegExp) {
    return new RegExp(value);
  }

  const clone = Array.isArray(value) ? [] : {};

  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      clone[key] = deepClone(value[key]);
    }
  }

  return clone;
};
