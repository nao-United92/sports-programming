/**
 * Safely sets an item in localStorage.
 *
 * @param key The key to store the data under.
 * @param value The data to store. Objects will be stringified.
 */
export function setLocalStorageItem(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error("Error setting localStorage item:", e);
    }
}

/**
 * Safely gets an item from localStorage.
 *
 * @param key The key of the item to retrieve.
 * @returns The parsed data, or null if not found or an error occurs.
 */
export function getLocalStorageItem(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (e) {
        console.error("Error getting localStorage item:", e);
        return null;
    }
}

/**
 * Safely removes an item from localStorage.
 *
 * @param key The key of the item to remove.
 */
export function removeLocalStorageItem(key) {
    try {
        localStorage.removeItem(key);
    } catch (e) {
        console.error("Error removing localStorage item:", e);
    }
}

/**
 * Safely clears all items from localStorage.
 */
export function clearLocalStorage() {
    try {
        localStorage.clear();
    } catch (e) {
        console.error("Error clearing localStorage:", e);
    }
}

/**
 * Safely sets an item in sessionStorage.
 *
 * @param key The key to store the data under. 
 * @param value The data to store. Objects will be stringified.
 */
export function setSessionStorageItem(key, value) {
    try {
        sessionStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error("Error setting sessionStorage item:", e);
    }
}

/**
 * Safely gets an item from sessionStorage.
 *
 * @param key The key of the item to retrieve.
 * @returns The parsed data, or null if not found or an error occurs.
 */
export function getSessionStorageItem(key) {
    try {
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (e) {
        console.error("Error getting sessionStorage item:", e);
        return null;
    }
}

/**
 * Safely removes an item from sessionStorage.
 *
 * @param key The key of the item to remove.
 */
export function removeSessionStorageItem(key) {
    try {
        sessionStorage.removeItem(key);
    } catch (e) {
        console.error("Error removing sessionStorage item:", e);
    }
}

/**
 * Safely clears all items from sessionStorage.
 */
export function clearSessionStorage() {
    try {
        sessionStorage.clear();
    } catch (e) {
        console.error("Error clearing sessionStorage:", e);
    }
}
