/**
 * Provides utility functions for interacting with localStorage,
 * handling JSON serialization and deserialization automatically.
 */
export const localStorageUtils = {
  /**
   * Sets an item in localStorage.
   * @param {string} key The key to store the item under.
   * @param {*} value The value to store. Will be JSON.stringify-ed.
   */
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting item to localStorage for key "${key}":`, error);
    }
  },

  /**
   * Gets an item from localStorage.
   * @param {string} key The key of the item to retrieve.
   * @returns {*} The retrieved value, JSON.parse-d, or null if not found or an error occurs.
   */
  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting item from localStorage for key "${key}":`, error);
      return null;
    }
  },

  /**
   * Removes an item from localStorage.
   * @param {string} key The key of the item to remove.
   */
  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from localStorage for key "${key}":`, error);
    }
  },

  /**
   * Clears all items from localStorage.
   */
  clear: () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },
};
