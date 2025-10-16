
import { reverseString } from './string-reverse-utils.js';

describe('reverseString', () => {
    test('should reverse a simple string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('should handle an empty string', () => {
        expect(reverseString('')).toBe('');
    });

    test('should handle strings with spaces', () => {
        expect(reverseString('hello world')).toBe('dlrow olleh');
    });

    test('should return an empty string for non-string input', () => {
        expect(reverseString(null)).toBe('');
        expect(reverseString(undefined)).toBe('');
        expect(reverseString(123)).toBe('');
    });
});
