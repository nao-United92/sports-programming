/**
 * Sets an item in the specified storage (localStorage or sessionStorage).
 * Automatically stringifies objects/arrays to JSON.
 * @param {Storage} storage The storage object (localStorage or sessionStorage).
 * @param {string} key The key to set.
 * @param {*} value The value to set.
 */
export const setItem = (storage, key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    storage.setItem(key, serializedValue);
  } catch (error) {
    console.error(`Error setting item to storage: ${error}`);
  }
};

/**
 * Gets an item from the specified storage (localStorage or sessionStorage).
 * Automatically parses JSON strings.
 * @param {Storage} storage The storage object (localStorage or sessionStorage).
 * @param {string} key The key to get.
 * @returns {*} The parsed value, or null if not found or parsing fails.
 */
export const getItem = (storage, key) => {
  try {
    const serializedValue = storage.getItem(key);
    return serializedValue ? JSON.parse(serializedValue) : null;
  } catch (error) {
    console.error(`Error getting item from storage: ${error}`);
    return null;
  }
};

/**
 * Removes an item from the specified storage (localStorage or sessionStorage).
 * @param {Storage} storage The storage object (localStorage or sessionStorage).
 * @param {string} key The key to remove.
 */
export const removeItem = (storage, key) => {
  try {
    storage.removeItem(key);
  } catch (error) {
    console.error(`Error removing item from storage: ${error}`);
  }
};

/**
 * Clears all items from the specified storage (localStorage or sessionStorage).
 * @param {Storage} storage The storage object (localStorage or sessionStorage).
 */
export const clearStorage = (storage) => {
  try {
    storage.clear();
  } catch (error) {
    console.error(`Error clearing storage: ${error}`);
  }
};
