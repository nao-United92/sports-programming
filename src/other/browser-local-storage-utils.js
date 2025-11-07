/**
 * Safely sets an item in localStorage.
 * Values are automatically stringified to JSON.
 *
 * @param {string} key The key to set.
 * @param {*} value The value to store.
 */
export const set = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting item in localStorage:', error);
  }
};

/**
 * Safely gets an item from localStorage.
 * Values are automatically parsed from JSON.
 *
 * @param {string} key The key to get.
 * @returns {*} The parsed value, or null if not found or parsing fails.
 */
export const get = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error getting or parsing item from localStorage:', error);
    return null;
  }
};

/**
 * Safely removes an item from localStorage.
 *
 * @param {string} key The key to remove.
 */
export const remove = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing item from localStorage:', error);
  }
};