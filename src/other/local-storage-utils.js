/**
 * Retrieves an item from localStorage and parses it as JSON.
 * @param {string} key The key of the item to retrieve.
 * @returns {any | null} The retrieved item, or null if not found or on error.
 */
export const getItem = (key) => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error getting item from localStorage: ${key}`, error);
    return null;
  }
};

/**
 * Adds an item to localStorage, converting it to a JSON string.
 * @param {string} key The key of the item to set.
 * @param {any} value The value to set.
 */
export const setItem = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting item in localStorage: ${key}`, error);
  }
};

/**
 * Removes an item from localStorage.
 * @param {string} key The key of the item to remove.
 */
export const removeItem = (key) => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing item from localStorage: ${key}`, error);
  }
};

/**
 * Sets an item in localStorage with an expiry time.
 * @param {string} key The key of the item to set.
 * @param {any} value The value to set.
 * @param {number} ttl The time to live in milliseconds.
 */
export const setItemWithExpiry = (key, value, ttl) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  setItem(key, item);
};

/**
 * Gets an item from localStorage, checking its expiry time.
 * @param {string} key The key of the item to retrieve.
 * @returns {any | null} The retrieved item, or null if not found or expired.
 */
export const getItemWithExpiry = (key) => {
  const item = getItem(key);
  if (!item) {
    return null;
  }
  const now = new Date();
  if (now.getTime() > item.expiry) {
    removeItem(key);
    return null;
  }
  return item.value;
};