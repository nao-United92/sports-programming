
/**
 * Performs a deep clone of an object or array.
 * Handles basic types, arrays, and plain objects. Does not handle functions, Dates, RegExps, Maps, Sets, etc.
 * @param {any} obj The object or array to clone.
 * @returns {any} The deep cloned object or array.
 */
export function deepClone(obj) {
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

  if (obj.constructor === Object) {
    const copy = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copy[key] = deepClone(obj[key]);
      }
    }
    return copy;
  }

  // For other object types (e.g., Date, RegExp, custom classes), return the object itself or throw an error
  // For simplicity, we'll return the object itself, but a more robust solution might throw or handle specifically.
  return obj;
}

/**
 * Checks if a value is empty.
 * Considers null, undefined, empty string, empty array, and empty object as empty.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is empty, false otherwise.
 */
export function isEmpty(value) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  return false;
}

/**
 * Safely gets a nested property from an object using a string path.
 * @param {object} obj The object to query.
 * @param {string} path The path to the property (e.g., 'a.b.c' or 'a[0].b').
 * @param {any} [defaultValue] The value to return if the property is not found.
 * @returns {any} The value at the specified path, or defaultValue if not found.
 */
export function get(obj, path, defaultValue) {
  const pathParts = Array.isArray(path) ? path : path.split(/\.|\B\[|\]\B/).filter(Boolean);
  let current = obj;

  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    if (current === null || typeof current !== 'object' || !Object.prototype.hasOwnProperty.call(current, part)) {
      return defaultValue;
    }
    current = current[part];
  }
  return current;
}

/**
 * Safely sets a nested property on an object using a string path.
 * Creates intermediate objects if they don't exist.
 * @param {object} obj The object to modify.
 * @param {string} path The path to the property (e.g., 'a.b.c' or 'a[0].b').
 * @param {any} value The value to set.
 * @returns {object} The modified object.
 */
export function set(obj, path, value) {
  const pathParts = Array.isArray(path) ? path : path.split(/\.|\B\[|\]\B/).filter(Boolean);
  let current = obj;

  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    if (i === pathParts.length - 1) {
      current[part] = value;
    } else {
      if (current[part] === null || typeof current[part] !== 'object') {
        current[part] = {}; // Create intermediate object if it doesn't exist
      }
      current = current[part];
    }
  }
  return obj;
}

/**
 * Returns a new object with specified keys omitted.
 * @param {object} obj The original object.
 * @param {string[]} keys An array of keys to omit.
 * @returns {object} A new object without the omitted keys.
 */
export function omit(obj, keys) {
  const newObj = { ...obj };
  for (const key of keys) {
    delete newObj[key];
  }
  return newObj;
}

/**
 * Returns a new object with only specified keys included.
 * @param {object} obj The original object.
 * @param {string[]} keys An array of keys to pick.
 * @returns {object} A new object with only the picked keys.
 */
export function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

/**
 * Checks if an array of objects contains an object with a specific key-value pair.
 * @param {Array<object>} arr The array of objects to search.
 * @param {string} key The key to check.
 * @param {*} value The value to match.
 * @returns {boolean} True if an object with the key-value pair is found, false otherwise.
 */
export function containsObjectByKey(arr, key, value) {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.some(obj => obj && obj[key] === value);
}
