const { sample } = require('./array-random-picker.js');

describe('sample', () => {
  test('should return a single element from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr);
    expect(arr).toContain(result);
  });

  test('should return undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  test('should return the only element for a single-element array', () => {
    expect(sample([42])).toBe(42);
  });

  test('should return different elements over multiple calls (probabilistic)', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const results = new Set();
    // Call sample many times to increase probability of getting different elements
    for (let i = 0; i < 100; i++) {
      results.add(sample(arr));
    }
    // It's highly probable to get more than one unique element from a large enough array
    expect(results.size).toBeGreaterThan(1);
    results.forEach(element => expect(arr).toContain(element));
  });

  test('should throw an error if the argument is not an array', () => {
    expect(() => sample(null)).toThrow('Expected an array for the first argument.');
    expect(() => sample(undefined)).toThrow('Expected an array for the first argument.');
    expect(() => sample(123)).toThrow('Expected an array for the first argument.');
    expect(() => sample('string')).toThrow('Expected an array for the first argument.');
    expect(() => sample({})).toThrow('Expected an array for the first argument.');
  });
});
