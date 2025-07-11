/**
 * Checks if a value is a number.
 *
 * @param value The value to check.
 * @returns True if the value is a number, false otherwise.
 */
export function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param num The number to clamp.
 * @param min The minimum allowed value.
 * @param max The maximum allowed value.
 * @returns The clamped number.
 */
export function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

/**
 * Generates a random integer within a specified range (inclusive).
 *
 * @param min The minimum value (inclusive).
 * @param max The maximum value (inclusive).
 * @returns A random integer.
 */
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Formats a number with a specified number of decimal places.
 *
 * @param num The number to format.
 * @param decimals The number of decimal places.
 * @returns The formatted number as a string.
 */
export function formatNumber(num, decimals) {
    if (!isNumber(num)) {
        return '';
    }
    return num.toFixed(decimals);
}
