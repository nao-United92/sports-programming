/**
 * Checks if a value is null or undefined.
 *
 * @param value The value to check.
 * @returns True if the value is null or undefined, false otherwise.
 */
export function isNullOrUndefined(value) {
    return value === null || value === undefined;
}

/**
 * Checks if a value is a plain object (i.e., an object created by {} or new Object()).
 *
 * @param value The value to check.
 * @returns True if the value is a plain object, false otherwise.
 */
export function isPlainObject(value) {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    const proto = Object.getPrototypeOf(value);
    return proto === null || proto === Object.prototype;
}

/**
 * Generates a unique ID.
 *
 * @param prefix Optional. A prefix for the ID.
 * @returns A unique string ID.
 */
export function generateUniqueId(prefix = '') {
    return prefix + Math.random().toString(36).substr(2, 9);
}

/**
 * Deep clones a JSON-serializable object.
 * Note: This method has limitations (e.g., cannot clone functions, Dates, RegExps, etc.).
 * For more complex cloning, consider a dedicated library.
 *
 * @param obj The object to clone.
 * @returns A deep clone of the object.
 */
export function deepCloneJson(obj) {
    try {
        return JSON.parse(JSON.stringify(obj));
    } catch (e) {
        console.error("Error deep cloning object (might contain non-JSON-serializable data):", e);
        return null;
    }
}

/**
 * Generates a UUID (Universally Unique Identifier) v4.
 * @returns {string} A UUID string.
 */
export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * A no-operation function. Does nothing.
 */
export function noop() {}
