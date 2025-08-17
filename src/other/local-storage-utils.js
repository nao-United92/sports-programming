/**
 * Sets a value in local storage.
 *
 * @param {string} key The key to set.
 * @param {any} value The value to set.
 */
export function setLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting local storage:', error);
  }
}

/**
 * Gets a value from local storage.
 *
 * @param {string} key The key to get.
 * @returns {any} The value from local storage, or null if not found.
 */
export function getLocalStorage(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error getting local storage:', error);
    return null;
  }
}
