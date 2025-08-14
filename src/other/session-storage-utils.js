/**
 * Sets an item in session storage.
 *
 * @param {string} key The key of the item to set.
 * @param {any} value The value to set. Will be stringified if not a string.
 */
export const setSessionStorageItem = (key, value) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting session storage item:', error);
  }
};

/**
 * Gets an item from session storage.
 *
 * @param {string} key The key of the item to get.
 * @returns {any | null} The parsed value, or null if not found or an error occurs.
 */
export const getSessionStorageItem = (key) => {
  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error getting session storage item:', error);
    return null;
  }
};

/**
 * Removes an item from session storage.
 *
 * @param {string} key The key of the item to remove.
 */
export const removeSessionStorageItem = (key) => {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing session storage item:', error);
  }
};
