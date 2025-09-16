/**
 * Sets a value in localStorage.
 * @param {string} key The key to set.
 * @param {*} value The value to set.
 */
const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error setting localStorage', e);
  }
};

/**
 * Gets a value from localStorage.
 * @param {string} key The key to get.
 * @returns {*} Returns the value from localStorage.
 */
const getLocalStorage = (key) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    console.error('Error getting localStorage', e);
    return null;
  }
};

/**
 * Removes a value from localStorage.
 * @param {string} key The key to remove.
 */
const removeLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error('Error removing localStorage', e);
  }
};

/**
 * Sets a value in sessionStorage.
 * @param {string} key The key to set.
 * @param {*} value The value to set.
 */
const setSessionStorage = (key, value) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error setting sessionStorage', e);
  }
};

/**
 * Gets a value from sessionStorage.
 * @param {string} key The key to get.
 * @returns {*} Returns the value from sessionStorage.
 */
const getSessionStorage = (key) => {
  try {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    console.error('Error getting sessionStorage', e);
    return null;
  }
};

/**
 * Removes a value from sessionStorage.
 * @param {string} key The key to remove.
 */
const removeSessionStorage = (key) => {
  try {
    sessionStorage.removeItem(key);
  } catch (e) {
    console.error('Error removing sessionStorage', e);
  }
};

module.exports = {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
};