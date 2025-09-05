/**
 * Safely sets a value in the browser's localStorage.
 * Automatically serializes objects and arrays.
 * @param {string} key The key to set.
 * @param {*} value The value to set.
 * @returns {boolean} True if the operation was successful, false otherwise.
 */
export function setLocalStorage(key, value) {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
    return true;
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
    return false;
  }
}

/**
 * Safely gets a value from the browser's localStorage.
 * Automatically deserializes JSON strings.
 * @param {string} key The key to get.
 * @returns {*} The retrieved value, or null if the key doesn't exist or an error occurs.
 */
export function getLocalStorage(key) {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
      return null;
    }
    return JSON.parse(serializedValue);
  } catch (error) {
    console.error(`Error getting localStorage key "${key}":`, error);
    return null;
  }
}