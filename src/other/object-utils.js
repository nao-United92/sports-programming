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
  if (obj === null || obj === undefined) {
    return false;
  }
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
  if (path === '') {
    return obj;
  }
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

/**
 * Recursively converts object keys to camelCase.
 * @param {object} obj The object to convert.
 * @returns {object} A new object with camelCase keys.
 */
export function toCamelCaseKeys(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(v => toCamelCaseKeys(v));
  }

  return Object.keys(obj).reduce((acc, key) => {
    const camelKey = key.replace(/_([a-z])/g, g => g[1].toUpperCase());
    acc[camelKey] = toCamelCaseKeys(obj[key]);
    return acc;
  }, {});
}

/**
 * Safely sets a nested property on an object using a dot-separated path.
 * If intermediate objects do not exist, they will be created.
 * @param {object} obj The object to modify.
 * @param {string} path The dot-separated path to the property (e.g., 'user.address.street').
 * @param {*} value The value to set.
 * @returns {object} The modified object.
 */
export function setNestedProperty(obj, path, value) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const parts = path.split('.');
  let current = obj;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (i === parts.length - 1) {
      current[part] = value;
    } else {
      if (typeof current[part] !== 'object' || current[part] === null) {
        current[part] = {};
      }
      current = current[part];
    }
  }
  return obj;
}

/**
 * Returns a new object with specified properties omitted.
 * @param {object} obj The original object.
 * @param {string[]} keys An array of keys to omit.
 * @returns {object} A new object without the omitted keys.
 */
export function omit(obj, keys) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const newObj = { ...obj };
  for (const key of keys) {
    delete newObj[key];
  }
  return newObj;
}