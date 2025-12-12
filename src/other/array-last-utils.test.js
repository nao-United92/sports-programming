const { last } = require('./array-last-utils');

describe('last', () => {
  test('should return the last element of an array', () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  test('should return undefined for an empty array', () => {
    expect(last([])).toBeUndefined();
  });

  test('should return undefined if the input is not an array', () => {
    expect(last(null)).toBeUndefined();
    expect(last(undefined)).toBeUndefined();
    expect(last(123)).toBeUndefined();
    expect(last('string')).toBeUndefined();
    expect(last({})).toBeUndefined();
  });

  test('should not modify the original array', () => {
    const original = [1, 2, 3];
    last(original);
    expect(original).toEqual([1, 2, 3]);
  });
});
