const { capitalize } = require('./string-capitalizer.js');

describe('capitalize', () => {
  test('should capitalize the first letter and lowercase the rest', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('WORLD')).toBe('World');
    expect(capitalize('jAvaScRiPt')).toBe('Javascript');
  });

  test('should return an empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle single character strings', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('Z')).toBe('Z');
  });

  test('should handle strings with leading/trailing spaces correctly (trimming is not part of capitalize)', () => {
    expect(capitalize('  hello  ')).toBe('  hello  '); // Should not trim
  });

  test('should throw an error if the argument is not a string', () => {
    expect(() => capitalize(null)).toThrow('Expected a string for the first argument.');
    expect(() => capitalize(undefined)).toThrow('Expected a string for the first argument.');
    expect(() => capitalize(123)).toThrow('Expected a string for the first argument.');
    expect(() => capitalize({})).toThrow('Expected a string for the first argument.');
    expect(() => capitalize([])).toThrow('Expected a string for the first argument.');
  });
});
