/**
 * Sets an item in localStorage, automatically stringifying objects.
 * @param {string} key The key to store the item under.
 * @param {*} value The value to store.
 */
export function setLocalStorageItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error setting localStorage item:', e);
  }
}

/**
 * Gets an item from localStorage, automatically parsing JSON strings.
 * @param {string} key The key of the item to retrieve.
 * @returns {*} The retrieved value, or null if not found or parsing fails.
 */
export function getLocalStorageItem(key) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.error('Error getting localStorage item:', e);
    return null;
  }
}

/**
 * Removes an item from localStorage.
 * @param {string} key The key of the item to remove.
 */
export function removeLocalStorageItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error('Error removing localStorage item:', e);
  }
}

/**
 * Sets an item in sessionStorage, automatically stringifying objects.
 * @param {string} key The key to store the item under.
 * @param {*} value The value to store.
 */
export function setSessionStorageItem(key, value) {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error setting sessionStorage item:', e);
  }
}

/**
 * Gets an item from sessionStorage, automatically parsing JSON strings.
 * @param {string} key The key of the item to retrieve.
 * @returns {*} The retrieved value, or null if not found or parsing fails.
 */
export function getSessionStorageItem(key) {
  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.error('Error getting sessionStorage item:', e);
    return null;
  }
}

/**
 * Removes an item from sessionStorage.
 * @param {string} key The key of the item to remove.
 */
export function removeSessionStorageItem(key) {
  try {
    sessionStorage.removeItem(key);
  } catch (e) {
    console.error('Error removing sessionStorage item:', e);
  }
}