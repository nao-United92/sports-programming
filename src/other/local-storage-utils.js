/**
 * Stores a value in localStorage after serializing it to JSON.
 * @param {string} key The key to store the value under.
 * @param {*} value The value to store.
 */
const setLocalStorageItem = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error('Error setting localStorage item:', error);
  }
};

/**
 * Retrieves a value from localStorage and deserializes it from JSON.
 * @param {string} key The key of the value to retrieve.
 * @returns {*} The retrieved value, or null if not found or on error.
 */
const getLocalStorageItem = (key) => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
      return null;
    }
    return JSON.parse(serializedValue);
  } catch (error) {
    console.error('Error getting localStorage item:', error);
    return null;
  }
};

/**
 * Removes an item from localStorage.
 * @param {string} key The key of the item to remove.
 */
const removeLocalStorageItem = (key) => {
  localStorage.removeItem(key);
};

module.exports = { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem };
