const { sample } = require('./array-sample-utils');

describe('sample', () => {
  test('should return a single element from the array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sample(array);
    expect(array).toContain(result);
  });

  test('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  test('should return undefined if the input is not an array', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample(undefined)).toBeUndefined();
    expect(sample(123)).toBeUndefined();
    expect(sample('string')).toBeUndefined();
    expect(sample({})).toBeUndefined();
  });

  test('should return the only element if the array has one element', () => {
    expect(sample([10])).toBe(10);
  });

  test('should not modify the original array', () => {
    const original = [1, 2, 3];
    sample(original);
    expect(original).toEqual([1, 2, 3]);
  });
});
