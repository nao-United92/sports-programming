/**
 * Creates an object composed of the picked object properties.
 * @param {Object} obj The source object.
 * @param {string[]} keys The property paths to pick.
 * @returns {Object} Returns the new object.
 */
export function pick(obj, keys) {
  if (obj === null || obj === undefined) {
    return {};
  }
  return keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 * @param {Object} obj The source object.
 * @param {string[]} keys The property paths to omit.
 * @returns {Object} Returns the new object.
 */
export function omit(obj, keys) {
  if (obj === null || obj === undefined) {
    return {};
  }
  const newObj = { ...obj };
  keys.forEach(key => {
    delete newObj[key];
  });
  return newObj;
}

/**
 * Creates a deep clone of an object or array.
 *
 * @param {any} obj The object or array to deep clone.
 * @returns {any} The deep cloned object or array.
 */
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  const clone = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * @param {any} value The value to compare.
 * @param {any} other The other value to compare.
 * @returns {boolean} True if the values are equivalent, false otherwise.
 */
export function isEqual(value, other) {
  if (value === other) {
    return true;
  }

  if (value === null || typeof value !== 'object' ||
      other === null || typeof other !== 'object') {
    return false;
  }

  if (Array.isArray(value) !== Array.isArray(other)) {
    return false;
  }

  if (Array.isArray(value)) {
    if (value.length !== other.length) {
      return false;
    }
    for (let i = 0; i < value.length; i++) {
      if (!isEqual(value[i], other[i])) {
        return false;
      }
    }
    return true;
  }

  const keysValue = Object.keys(value);
  const keysOther = Object.keys(other);

  if (keysValue.length !== keysOther.length) {
    return false;
  }

  for (const key of keysValue) {
    if (!keysOther.includes(key) || !isEqual(value[key], other[key])) {
      return false;
    }
  }

  return true;
}
