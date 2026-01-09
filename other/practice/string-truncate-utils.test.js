import { truncate } from './string-truncate-utils.js';

describe('truncate', () => {
  const str = 'abcdefghijklmnopqrstuvwxyz';

  test('should truncate a string to a specified length', () => {
    expect(truncate(str, 10)).toBe('abcdefghij...');
  });

  test('should not truncate if the string is shorter than or equal to the length', () => {
    expect(truncate('short', 10)).toBe('short');
    expect(truncate('ten chars!', 10)).toBe('ten chars!');
  });

  test('should use a custom omission string', () => {
    expect(truncate(str, 10, '... (more)')).toBe('abcdefghij... (more)');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(truncate(null, 10)).toBe('');
    expect(truncate(123, 5)).toBe('');
  });

  test('should handle a length of 0', () => {
    expect(truncate(str, 0)).toBe('...');
  });
});
