/**
 * Stores a value in localStorage, automatically serializing it to JSON.
 * @param {string} key The key to store the value under.
 * @param {any} value The value to store.
 */
export const setLocalStorage = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error('Error saving to localStorage', error);
  }
};

/**
 * Retrieves a value from localStorage, automatically deserializing it from JSON.
 * @param {string} key The key of the value to retrieve.
 * @returns {any|null} The retrieved value, or null if not found or on error.
 */
export const getLocalStorage = (key) => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
      return null;
    }
    return JSON.parse(serializedValue);
  } catch (error) {
    console.error('Error reading from localStorage', error);
    return null;
  }
};

/**
 * Removes a value from localStorage.
 * @param {string} key The key of the value to remove.
 */
export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
