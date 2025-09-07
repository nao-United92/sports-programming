/**
 * Sets an item in localStorage.
 * @param {string} key The key of the item.
 * @param {*} value The value to store. Will be stringified if not a string.
 */
export const setLocalStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error setting localStorage item:', e);
  }
};

/**
 * Gets an item from localStorage.
 * @param {string} key The key of the item.
 * @returns {*} The parsed value, or null if not found or an error occurs.
 */
export const getLocalStorageItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.error('Error getting localStorage item:', e);
    return null;
  }
};

/**
 * Removes an item from localStorage.
 * @param {string} key The key of the item to remove.
 */
export const removeLocalStorageItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error('Error removing localStorage item:', e);
  }
};

/**
 * Sets an item in sessionStorage.
 * @param {string} key The key of the item.
 * @param {*} value The value to store. Will be stringified if not a string.
 */
export const setSessionStorageItem = (key, value) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error setting sessionStorage item:', e);
  }
};

/**
 * Gets an item from sessionStorage.
 * @param {string} key The key of the item.
 * @returns {*} The parsed value, or null if not found or an error occurs.
 */
export const getSessionStorageItem = (key) => {
  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.error('Error getting sessionStorage item:', e);
    return null;
  }
};

/**
 * Removes an item from sessionStorage.
 * @param {string} key The key of the item to remove.
 */
export const removeSessionStorageItem = (key) => {
  try {
    sessionStorage.removeItem(key);
  } catch (e) {
    console.error('Error removing sessionStorage item:', e);
  }
};
