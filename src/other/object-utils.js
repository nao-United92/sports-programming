/**
 * Performs a deep clone of an object or array.
 * @param {object|Array} obj The object or array to clone.
 * @returns {object|Array} A deep clone of the input.
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
 * Checks if an object is empty (has no enumerable own properties).
 * @param {object} obj The object to check.
 * @returns {boolean} True if the object is empty, false otherwise.
 */
export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

/**
 * Safely gets a nested property from an object using a dot-separated path.
 * @param {object} obj The object to query.
 * @param {string} path The dot-separated path to the property (e.g., 'user.address.street').
 * @param {*} [defaultValue] The default value to return if the property is not found.
 * @returns {*} The value of the nested property, or defaultValue if not found.
 */
export function getNestedProperty(obj, path, defaultValue = undefined) {
  const parts = path.split('.');
  let current = obj;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (current === null || typeof current !== 'object' || !Object.prototype.hasOwnProperty.call(current, part)) {
      return defaultValue;
    }
    current = current[part];
  }
  return current;
}