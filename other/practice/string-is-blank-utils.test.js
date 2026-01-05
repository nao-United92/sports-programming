import isBlank from './string-is-blank-utils';

describe('isBlank', () => {
  test('should return true for empty string', () => {
    expect(isBlank('')).toBe(true);
  });

  test('should return true for strings with only whitespace', () => {
    expect(isBlank(' ')).toBe(true);
    expect(isBlank('\t\n\r')).toBe(true);
    expect(isBlank('   ')).toBe(true);
  });

  test('should return false for strings with non-whitespace characters', () => {
    expect(isBlank('hello')).toBe(false);
    expect(isBlank('  hello  ')).toBe(false);
    expect(isBlank(' a ')).toBe(false);
  });

  test('should throw an error if the argument is not a string', () => {
    expect(() => isBlank(null)).toThrow(TypeError);
    expect(() => isBlank(undefined)).toThrow(TypeError);
    expect(() => isBlank(123)).toThrow(TypeError);
    expect(() => isBlank({})).toThrow(TypeError);
  });
});
