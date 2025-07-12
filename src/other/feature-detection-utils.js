/**
 * Checks if the browser supports localStorage.
 * @returns {boolean} True if localStorage is supported and available, false otherwise.
 */
export function hasLocalStorage() {
    try {
        const test = '__localStorageTest__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Checks if the browser supports sessionStorage.
 * @returns {boolean} True if sessionStorage is supported and available, false otherwise.
 */
export function hasSessionStorage() {
    try {
        const test = '__sessionStorageTest__';
        sessionStorage.setItem(test, test);
        sessionStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Checks if the browser supports Web Workers.
 * @returns {boolean} True if Web Workers are supported, false otherwise.
 */
export function hasWebWorkers() {
    return typeof Worker !== 'undefined';
}

/**
 * Checks if the browser supports the Geolocation API.
 * @returns {boolean} True if Geolocation is supported, false otherwise.
 */
export function hasGeolocation() {
    return 'geolocation' in navigator;
}

/**
 * Checks if the browser supports the Fetch API.
 * @returns {boolean} True if Fetch API is supported, false otherwise.
 */
export function hasFetchAPI() {
    return typeof fetch === 'function';
}
