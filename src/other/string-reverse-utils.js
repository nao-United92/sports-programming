/**
 * Reverses a string.
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 */
export const reverseString = (str) => {
    if (typeof str !== 'string') {
        return '';
    }
    return str.split('').reverse().join('');
};