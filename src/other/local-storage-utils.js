/**
 * Sets an item in localStorage, handling JSON serialization.
 *
 * @param {string} key The key for the item.
 * @param {any} value The value to store. Can be any JSON-serializable type.
 * @returns {boolean} True if the item was set successfully, false otherwise.
 */
export const setLocalStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error setting localStorage item for key "${key}":`, error);
    return false;
  }
};

/**
 * Gets an item from localStorage, handling JSON deserialization.
 *
 * @param {string} key The key for the item.
 * @returns {any | null} The deserialized value, or null if not found or an error occurs.
 */
export const getLocalStorageItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error getting localStorage item for key "${key}":`, error);
    return null;
  }
};