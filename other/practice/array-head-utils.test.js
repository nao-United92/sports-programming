import head from './array-head-utils';

describe('head', () => {
  test('should return the first element of an array', () => {
    expect(head([1, 2, 3])).toBe(1);
  });

  test('should return undefined for an empty array', () => {
    expect(head([])).toBeUndefined();
  });

  test('should work with arrays containing different types', () => {
    expect(head(['a', 'b', 'c'])).toBe('a');
    expect(head([null, 1, 2])).toBeNull();
  });
});
