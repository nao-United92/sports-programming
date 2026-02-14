const sample = require('./array-sample');

describe('sample', () => {
  test('should return a random element from the array', () => {
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

  test('should return one of the elements for a larger array', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const results = Array.from({
      length: 100
    }, () => sample(arr));
    results.forEach(result => {
      expect(arr).toContain(result);
    });
    // Ensure that not all results are the same (probabilistic check)
    expect(new Set(results).size).toBeGreaterThan(1);
  });

  test('should throw an error if the argument is not an array', () => {
    expect(() => sample(null)).toThrow('Argument must be an array.');
    expect(() => sample('string')).toThrow('Argument must be an array.');
    expect(() => sample(123)).toThrow('Argument must be an array.');
  });
});
