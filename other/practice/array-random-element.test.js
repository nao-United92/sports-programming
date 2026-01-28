const { randomElement } = require('./array-random-element');

describe('randomElement', () => {
  const arr = [1, 2, 3, 4, 5];

  it('should return an element that is present in the array', () => {
    const element = randomElement(arr);
    expect(arr.includes(element)).toBe(true);
  });

  it('should return undefined for an empty array', () => {
    expect(randomElement([])).toBeUndefined();
  });

  it('should return undefined for non-array inputs', () => {
    expect(randomElement(null)).toBeUndefined();
    expect(randomElement({})).toBeUndefined();
    expect(randomElement('string')).toBeUndefined();
  });

  it('should be able to return any element in the array', () => {
    const results = new Set();
    for (let i = 0; i < 100; i++) {
      results.add(randomElement(arr));
    }
    // This test is probabilistic, but with 100 iterations, it's highly likely
    // that all elements of a 5-element array will be picked.
    expect(results.size).toBe(arr.length);
  });
});
