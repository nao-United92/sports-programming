/**
 * Creates a shallow clone of `value`.
 *
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 */
export const clone = (value) => {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.slice();
  }

  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags);
  }

  if (value instanceof Map) {
    return new Map(value);
  }

  if (value instanceof Set) {
    return new Set(value);
  }

  // Handle plain objects and class instances
  // Create a new instance of the same constructor
  const cloned = Object.create(Object.getPrototypeOf(value));
  // Copy own enumerable properties
  return Object.assign(cloned, value);
};