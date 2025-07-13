
/**
 * Stores a JavaScript object as a JSON string in the specified storage (localStorage by default).
 * @param {string} key The key under which to store the item.
 * @param {object} value The JavaScript object to store.
 * @param {Storage} [storage=localStorage] The storage object to use (localStorage or sessionStorage).
 * @returns {boolean} True if the item was successfully stored, false otherwise.
 */
export function setJSONItem(key, value, storage = localStorage) {
  try {
    const jsonString = JSON.stringify(value);
    storage.setItem(key, jsonString);
    return true;
  } catch (e) {
    console.error(`Error storing JSON item with key "${key}":`, e);
    return false;
  }
}

/**
 * Retrieves and parses a JSON string from the specified storage (localStorage by default).
 * @param {string} key The key of the item to retrieve.
 * @param {Storage} [storage=localStorage] The storage object to use (localStorage or sessionStorage).
 * @returns {object|null} The parsed JavaScript object, or null if the item does not exist or parsing fails.
 */
export function getJSONItem(key, storage = localStorage) {
  try {
    const jsonString = storage.getItem(key);
    if (jsonString === null) {
      return null;
    }
    return JSON.parse(jsonString);
  } catch (e) {
    console.error(`Error retrieving or parsing JSON item with key "${key}":`, e);
    return null;
  }
}

/**
 * Removes a JSON item from the specified storage (localStorage by default).
 * @param {string} key The key of the item to remove.
 * @param {Storage} [storage=localStorage] The storage object to use (localStorage or sessionStorage).
 */
export function removeJSONItem(key, storage = localStorage) {
  storage.removeItem(key);
}
