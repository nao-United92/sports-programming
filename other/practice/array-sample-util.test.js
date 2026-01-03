const sample = require('./array-sample-util');

describe('sample', () => {
  it('should return an element that is present in the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr);
    expect(arr.includes(result)).toBe(true);
  });

  it('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  it('should return undefined for a null or undefined input', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample(undefined)).toBeUndefined();
  });

  it('should return the only element for an array with a single element', () => {
    expect(sample([42])).toBe(42);
  });

  it('should be able to return any element in the array', () => {
    const arr = [1, 2];
    const results = new Set();
    // Run it multiple times to increase the chance of getting all possible values.
    for (let i = 0; i < 50; i++) {
      results.add(sample(arr));
    }
    // It's statistically very likely that both 1 and 2 have been chosen.
    expect(results.has(1)).toBe(true);
    expect(results.has(2)).toBe(true);
  });
});
