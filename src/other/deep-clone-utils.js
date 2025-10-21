/**
 * Creates a deep clone of a value.
 *
 * Note: This is a simplified implementation and does not handle all cases.
 * For example, it doesn't handle functions, Maps, Sets, or circular references.
 *
 * @param {*} value The value to clone.
 * @returns {*} Returns the deep cloned value.
 */
export function deepClone(value) {
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(item => deepClone(item));
  }

  const cloned = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      cloned[key] = deepClone(value[key]);
    }
  }
  return cloned;
}