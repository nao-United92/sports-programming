const { sample } = require('./sample-utils.js');

describe('sample', () => {
  test('should return a random element from an array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sample(array);
    expect(array).toContain(result);
  });

  test('should return undefined for an empty array', () => {
    const array = [];
    const result = sample(array);
    expect(result).toBeUndefined();
  });

  test('should return undefined for a null or undefined array', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample(undefined)).toBeUndefined();
  });
});