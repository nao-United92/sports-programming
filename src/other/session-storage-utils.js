/**
 * Sets a value in session storage.
 *
 * @param {string} key The key to set.
 * @param {any} value The value to set.
 */
export function setSessionStorage(key, value) {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting session storage:', error);
  }
}

/**
 * Gets a value from session storage.
 *
 * @param {string} key The key to get.
 * @returns {any} The value from session storage, or null if not found.
 */
export function getSessionStorage(key) {
  try {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error getting session storage:', error);
    return null;
  }
}