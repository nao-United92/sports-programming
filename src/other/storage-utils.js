/**
 * Sets a value in local storage.
 * @param {string} key The key to set.
 * @param {any} value The value to set. It will be JSON.stringified.
 */
export function setLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error setting local storage', e);
  }
}

/**
 * Gets a value from local storage.
 * @param {string} key The key to get.
 * @returns {any} The parsed value from local storage, or null if not found.
 */
export function getLocalStorage(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    console.error('Error getting local storage', e);
    return null;
  }
}

/**
 * Removes a value from local storage.
 * @param {string} key The key to remove.
 */
export function removeLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error('Error removing local storage', e);
  }
}

/**
 * Sets a value in session storage.
 * @param {string} key The key to set.
 * @param {any} value The value to set. It will be JSON.stringified.
 */
export function setSessionStorage(key, value) {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error setting session storage', e);
  }
}

/**
 * Gets a value from session storage.
 * @param {string} key The key to get.
 * @returns {any} The parsed value from session storage, or null if not found.
 */
export function getSessionStorage(key) {
  try {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    console.error('Error getting session storage', e);
    return null;
  }
}

/**
 * Removes a value from session storage.
 * @param {string} key The key to remove.
 */
export function removeSessionStorage(key) {
  try {
    sessionStorage.removeItem(key);
  } catch (e) {
    console.error('Error removing session storage', e);
  }
}