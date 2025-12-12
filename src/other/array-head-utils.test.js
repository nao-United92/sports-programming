const { head } = require('./array-head-utils');

describe('head', () => {
  test('should return the first element of an array', () => {
    expect(head([1, 2, 3])).toBe(1);
  });

  test('should return undefined for an empty array', () => {
    expect(head([])).toBeUndefined();
  });

  test('should return undefined if the input is not an array', () => {
    expect(head(null)).toBeUndefined();
    expect(head(undefined)).toBeUndefined();
    expect(head(123)).toBeUndefined();
    expect(head('string')).toBeUndefined();
    expect(head({})).toBeUndefined();
  });

  test('should not modify the original array', () => {
    const original = [1, 2, 3];
    head(original);
    expect(original).toEqual([1, 2, 3]);
  });
});