// src/other/object-manipulation-utils.js

/**
 * Safely retrieves a nested property from an object using a path string.
 *
 * @param {Object} obj The object to query.
 * @param {string} path The path to the property (e.g., 'a.b.c' or 'a[0].b').
 * @param {any} [defaultValue] The value to return if the property is not found.
 * @returns {any} The value of the property, or the defaultValue if not found.
 */
const get = (obj, path, defaultValue) => {
  if (typeof obj !== 'object' || obj === null || typeof path !== 'string' || path === '') {
    return defaultValue;
  }

  const pathParts = path.split(/[.\[\]]/).filter(Boolean); // Split by . or [] and remove empty strings

  let current = obj;
  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    if (typeof current === 'object' && current !== null && Object.prototype.hasOwnProperty.call(current, part)) {
      current = current[part];
    } else {
      return defaultValue;
    }
  }

  return current;
};

module.exports = {
  get,
};