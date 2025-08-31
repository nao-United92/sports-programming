/**
 * Creates a deep clone of a value.
 *
 * @param {*} value The value to clone.
 * @returns {*} Returns the deep cloned value.
 */
export function cloneDeep(value) {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (value instanceof RegExp) {
    return new RegExp(value);
  }

  if (value instanceof Map) {
    const newMap = new Map();
    for (const [key, val] of value) {
      newMap.set(cloneDeep(key), cloneDeep(val));
    }
    return newMap;
  }

  if (value instanceof Set) {
    const newSet = new Set();
    for (const val of value) {
      newSet.add(cloneDeep(val));
    }
    return newSet;
  }

  const newObj = Array.isArray(value) ? [] : {};

  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      newObj[key] = cloneDeep(value[key]);
    }
  }

  return newObj;
}
