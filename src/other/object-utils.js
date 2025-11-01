
/**
 * Checks if a value is empty.
 * Empty means: null, undefined, empty string, empty array, empty object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is empty, false otherwise.
 */
export const isEmpty = (value) => {
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  return false;
};

/**
 * Performs a deep clone of an object or array.
 *
 * Note: This implementation does not handle circular references to prevent stack overflow.
 *
 * @param {*} obj The object or array to clone.
 * @returns {*} A deep clone of the input.
 */
export const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    const copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  const copy = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = deepClone(obj[key]);
    }
  }
  return copy;
};

/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * @param {*} a The value to compare.
 * @param {*} b The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
export const isEqual = (a, b) => {
  if (a === b) return true;

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (a instanceof RegExp && b instanceof RegExp) {
    return a.toString() === b.toString();
  }

  if (
    a === null ||
    b === null ||
    typeof a !== 'object' ||
    typeof b !== 'object'
  ) {
    return a === b;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(b, key) || !isEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
};
