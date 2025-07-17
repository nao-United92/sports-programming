/**
 * Checks if a value is a string.
 *
 * @param value The value to check.
 * @returns True if the value is a string, false otherwise.
 */
export function isString(value) {
    return typeof value === 'string';
}

/**
 * Checks if a value is an array.
 *
 * @param value The value to check.
 * @returns True if the value is an array, false otherwise.
 */
export function isArray(value) {
    return Array.isArray(value);
}

/**
 * Checks if a value is a function.
 *
 * @param value The value to check.
 * @returns True if the value is a function, false otherwise.
 */
export function isFunction(value) {
    return typeof value === 'function';
}

/**
 * Checks if a value is a boolean.
 *
 * @param value The value to check.
 * @returns True if the value is a boolean, false otherwise.
 */
export function isBoolean(value) {
    return typeof value === 'boolean';
}

/**
 * Checks if a value is an object (and not null or an array).
 *
 * @param value The value to check.
 * @returns True if the value is an object, false otherwise.
 */
export function isObject(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Checks if a value is a number.
 *
 * @param value The value to check.
 * @returns True if the value is a number, false otherwise.
 */
export function isNumber(value) {
    return typeof value === 'number';
}

/**
 * Checks if a value is undefined.
 *
 * @param value The value to check.
 * @returns True if the value is undefined, false otherwise.
 */
export function isUndefined(value) {
    return typeof value === 'undefined';
}
