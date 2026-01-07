const { sample } = require('./array-sample-utils');

describe('sample', () => {
  const array = [1, 2, 3, 4, 5];

  test('should return a single random element from the array', () => {
    const result = sample(array);
    expect(array).toContain(result);
  });

  test('should return undefined for an empty array input', () => {
    expect(sample([])).toBeUndefined();
  });

  test('should not modify the original array', () => {
    const originalArray = [...array];
    sample(array);
    expect(array).toEqual(originalArray);
  });

  test('should throw a TypeError for non-array input', () => {
    expect(() => sample(null)).toThrow(TypeError);
    expect(() => sample(null)).toThrow('Expected an array for the argument.');
    expect(() => sample(undefined)).toThrow(TypeError);
    expect(() => sample('string')).toThrow(TypeError);
    expect(() => sample(123)).toThrow(TypeError);
    expect(() => sample({})).toThrow(TypeError);
  });
  
  test('should produce different samples across multiple calls (probabilistic)', () => {
    const sample1 = sample(array);
    const sample2 = sample(array);
    // While theoretically possible to get the same sample twice, it's highly improbable
    // and we want to ensure some level of randomness. This test is probabilistic.
    let isDifferent = false;
    for (let i = 0; i < 100; i++) { // Run multiple times to reduce test flakiness
      if (sample(array) !== sample1) {
        isDifferent = true;
        break;
      }
    }
    expect(isDifferent).toBe(true);
  });
});
