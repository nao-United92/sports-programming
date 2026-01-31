const arrayLast = require('./array-last');

describe('arrayLast', () => {
  test('should return the last element of an array', () => {
    expect(arrayLast([1, 2, 3])).toBe(3);
  });

  test('should return undefined for an empty array', () => {
    expect(arrayLast([])).toBeUndefined();
  });

  test('should return the element for a single-element array', () => {
    expect(arrayLast(['a'])).toBe('a');
  });

  test('should return undefined for non-array inputs', () => {
    expect(arrayLast('abc')).toBeUndefined();
    expect(arrayLast(null)).toBeUndefined();
    expect(arrayLast({})).toBeUndefined();
  });
});
