/**
 * Casts `value` as an array if it's not one.
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 */
export function castArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
}
