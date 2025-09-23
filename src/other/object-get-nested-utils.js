/**
 * Safely gets a nested property from an object using a dot-separated path.
 * Returns a default value if the property or any part of the path does not exist.
 *
 * @param {object} obj The object to query.
 * @param {string} path The dot-separated path to the property (e.g., 'user.address.street').
 * @param {any} [defaultValue] The value to return if the property is not found. Defaults to undefined.
 * @returns {any} The value of the nested property, or the defaultValue if not found.
 */
export function getNestedProperty(obj, path, defaultValue) {
  if (obj === null || typeof obj !== 'object') {
    return defaultValue;
  }

  const pathParts = path.split('.');
  let current = obj;

  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    if (current === null || typeof current !== 'object' || !current.hasOwnProperty(part)) {
      return defaultValue;
    }
    current = current[part];
  }

  return current;
}
