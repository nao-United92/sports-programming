/**
 * A collection of utility functions for interacting with Web Storage APIs
 * (localStorage and sessionStorage). It automatically handles JSON serialization
 * and deserialization.
 */

/**
 * Stores a value in localStorage.
 * @param {string} key The key to store the value under.
 * @param {*} value The value to store. It will be JSON.stringified.
 */
export function setLocalStorage(key, value) {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error('Error saving to localStorage', error);
  }
}

/**
 * Retrieves a value from localStorage.
 * @param {string} key The key of the value to retrieve.
 * @returns {*} The retrieved value, parsed from JSON, or null if not found or on error.
 */
export function getLocalStorage(key) {
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
}

/**
 * Removes a value from localStorage.
 * @param {string} key The key of the value to remove.
 */
export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}

/**
 * Clears all items from localStorage.
 */
export function clearLocalStorage() {
  localStorage.clear();
}


/**
 * Stores a value in sessionStorage.
 * @param {string} key The key to store the value under.
 * @param {*} value The value to store. It will be JSON.stringified.
 */
export function setSessionStorage(key, value) {
  try {
    const serializedValue = JSON.stringify(value);
    sessionStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error('Error saving to sessionStorage', error);
  }
}

/**
 * Retrieves a value from sessionStorage.
 * @param {string} key The key of the value to retrieve.
 * @returns {*} The retrieved value, parsed from JSON, or null if not found or on error.
 */
export function getSessionStorage(key) {
  try {
    const serializedValue = sessionStorage.getItem(key);
    if (serializedValue === null) {
      return null;
    }
    return JSON.parse(serializedValue);
  } catch (error) {
    console.error('Error reading from sessionStorage', error);
    return null;
  }
}

/**
 * Removes a value from sessionStorage.
 * @param {string} key The key of the value to remove.
 */
export function removeSessionStorage(key) {
  sessionStorage.removeItem(key);
}

/**
 * Clears all items from sessionStorage.
 */
export function clearSessionStorage() {
  sessionStorage.clear();
}