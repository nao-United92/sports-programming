import last from './array-last-utils';

describe('last', () => {
  test('should return the last element of an array', () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  test('should return undefined for an empty array', () => {
    expect(last([])).toBeUndefined();
  });

  test('should work with arrays containing different types', () => {
    expect(last(['a', 'b', 'c'])).toBe('c');
    expect(last([1, 2, null])).toBeNull();
  });
});
