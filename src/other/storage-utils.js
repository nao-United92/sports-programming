// src/other/storage-utils.js

/**
 * Sets an item in localStorage, automatically converting objects to JSON strings.
 *
 * @param {string} key The key under which to store the item.
 * @param {any} value The value to store.
 */
const setLocalStorageItem = (key, value) => {
  if (typeof localStorage === 'undefined' || typeof key !== 'string') {
    return;
  }
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting localStorage item:', error);
  }
};

/**
 * Retrieves an item from localStorage, automatically converting JSON strings to objects.
 *
 * @param {string} key The key of the item to retrieve.
 * @returns {any | null} The retrieved value, or null if not found or an error occurs.
 */
const getLocalStorageItem = (key) => {
  if (typeof localStorage === 'undefined' || typeof key !== 'string') {
    return null;
  }
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error getting localStorage item:', error);
    return null;
  }
};

module.exports = {
  setLocalStorageItem,
  getLocalStorageItem,
};