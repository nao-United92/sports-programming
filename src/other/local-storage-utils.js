
/**
 * Sets an item in local storage.
 *
 * @param {string} key The key of the item to set.
 * @param {any} value The value to set. Will be stringified if not a string.
 */
export const setLocalStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting local storage item:', error);
  }
};

/**
 * Gets an item from local storage.
 *
 * @param {string} key The key of the item to get.
 * @returns {any | null} The parsed value, or null if not found or an error occurs.
 */
export const getLocalStorageItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error getting local storage item:', error);
    return null;
  }
};

/**
 * Removes an item from local storage.
 *
 * @param {string} key The key of the item to remove.
 */
export const removeLocalStorageItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing local storage item:', error);
  }
};
