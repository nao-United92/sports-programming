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

/**
 * Clears all items from localStorage.
 */
export function clearLocalStorage() {
  try {
    localStorage.clear();
  } catch (e) {
    console.error('Error clearing localStorage:', e);
  }
}

/**
 * Clears all items from sessionStorage.
 */
export function clearSessionStorage() {
  try {
    sessionStorage.clear();
  } catch (e) {
    console.error('Error clearing sessionStorage:', e);
  }
}

/**
 * Sets a cookie.
 * @param {string} name The name of the cookie.
 * @param {string} value The value of the cookie.
 * @param {number} days The number of days until the cookie expires.
 */
export function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

/**
 * Gets a cookie by name.
 * @param {string} name The name of the cookie to retrieve.
 * @returns {string|null} The value of the cookie, or null if not found.
 */
export function getCookie(name) {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

/**
 * Removes a cookie by name.
 * @param {string} name The name of the cookie to remove.
 */
export function removeCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}
