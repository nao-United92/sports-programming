import { upperFirst } from './string-upper-first-utils.js';

describe('upperFirst', () => {
  test('should convert the first character of a string to uppercase', () => {
    expect(upperFirst('fred')).toBe('Fred');
    expect(upperFirst('FRED')).toBe('FRED');
    expect(upperFirst('  fred')).toBe('  fred'); // Should not trim
  });

  test('should handle empty strings', () => {
    expect(upperFirst('')).toBe('');
    expect(upperFirst(null)).toBe('');
    expect(upperFirst(undefined)).toBe('');
  });

  test('should handle strings that are already uppercase', () => {
    expect(upperFirst('HELLO')).toBe('HELLO');
  });

  test('should handle strings with numbers or special characters', () => {
    expect(upperFirst('123test')).toBe('123test');
    expect(upperFirst('#test')).toBe('#test');
  });
});
