/**
 * Creates a deep clone of a value.
 *
 * @param {*} value The value to clone.
 * @returns {*} Returns the deep cloned value.
 */
export function deepClone(value) {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (value instanceof RegExp) {
    return new RegExp(value);
  }

  if (Array.isArray(value)) {
    const newArray = [];
    for (let i = 0; i < value.length; i++) {
      newArray[i] = deepClone(value[i]);
    }
    return newArray;
  }

  const newObject = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      newObject[key] = deepClone(value[key]);
    }
  }
  return newObject;
}
