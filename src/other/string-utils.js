/**
 * Capitalizes the first letter of a string.
 *
 * @param str The input string.
 * @returns The string with the first letter capitalized.
 */
export function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverses a string.
 *
 * @param str The input string.
 * @returns The reversed string.
 */
export function reverseString(str) {
    if (typeof str !== 'string') {
        return '';
    }
    return str.split('').reverse().join('');
}

/**
 * Checks if a string is a palindrome (reads the same forwards and backwards).
 * Case-insensitive and ignores non-alphanumeric characters.
 *
 * @param str The input string.
 * @returns True if the string is a palindrome, false otherwise.
 */
export function isPalindrome(str) {
    if (typeof str !== 'string') {
        return false;
    }
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === reverseString(cleanedStr);
}

/**
 * Truncates a string to a specified length, adding an ellipsis if truncated.
 *
 * @param str The input string.
 * @param maxLength The maximum length of the string.
 * @returns The truncated string.
 */
export function truncate(str, maxLength) {
    if (typeof str !== 'string' || str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength - 3) + '...';
}
