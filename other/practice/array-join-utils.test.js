import { join } from './array-join-utils.js';

describe('join', () => {
  test('should join all elements of an array into a string with a separator', () => {
    expect(join(['a', 'b', 'c'])).toBe('a,b,c');
  });

  test('should use a custom separator', () => {
    expect(join(['a', 'b', 'c'], ';')).toBe('a;b;c');
  });

  test('should use a different separator for the end', () => {
    expect(join(['a', 'b', 'c'], ',', '&')).toBe('a,b&c');
  });

  test('should work with a single element', () => {
    expect(join(['a'])).toBe('a');
  });

  test('should return an empty string for an empty array', () => {
    expect(join([])).toBe('');
  });
});