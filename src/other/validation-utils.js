/**
 * Checks if a string is empty or contains only whitespace.
 *
 * @param str The string to check.
 * @returns True if the string is empty or whitespace only, false otherwise.
 */
export function isEmptyString(str) {
    return typeof str !== 'string' || str.trim().length === 0;
}

/**
 * Checks if a string is a valid email address.
 *
 * @param email The string to check.
 * @returns True if the string is a valid email, false otherwise.
 */
export function isValidEmail(email) {
    if (typeof email !== 'string') {
        return false;
    }
    // Basic regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Checks if a string is a valid URL.
 *
 * @param url The string to check.
 * @returns True if the string is a valid URL, false otherwise.
 */
export function isValidUrl(url) {
    if (typeof url !== 'string') {
        return false;
    }
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Checks if a string represents a valid number (can be parsed as a float).
 *
 * @param value The value to check.
 * @returns True if the value is a valid number string, false otherwise.
 */
export function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

/**
 * Checks if a value is within a specified range (inclusive).
 *
 * @param value The value to check.
 * @param min The minimum allowed value.
 * @param max The maximum allowed value.
 * @returns True if the value is within the range, false otherwise.
 */
export function isInRange(value, min, max) {
    if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
        return false;
    }
    return value >= min && value <= max;
}
