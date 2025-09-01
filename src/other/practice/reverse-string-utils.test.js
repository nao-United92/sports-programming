import { reverseString } from './reverse-string-utils';

describe('reverseString', () => {
  test('should reverse a simple string', () => {
    const str = 'hello';
    const expected = 'olleh';
    expect(reverseString(str)).toBe(expected);
  });

  test('should handle an empty string', () => {
    const str = '';
    const expected = '';
    expect(reverseString(str)).toBe(expected);
  });

  test('should handle a string with spaces', () => {
    const str = 'hello world';
    const expected = 'dlrow olleh';
    expect(reverseString(str)).toBe(expected);
  });

  test('should handle a string with special characters', () => {
    const str = '!@#$%^&*()';
    const expected = ')(*&^%$#@!';
    expect(reverseString(str)).toBe(expected);
  });
});
