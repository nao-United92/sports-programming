const expect = require('expect');
const weightedSample = require('./array-weighted-sample-utils');

describe('weightedSample', () => {
  test('weightedSample is a function', () => {
    expect(typeof weightedSample).toBe('function');
  });

  test('should return undefined for invalid inputs', () => {
    expect(weightedSample([], [1])).toBe(undefined);
    expect(weightedSample(['a'], [])).toBe(undefined);
    expect(weightedSample(['a', 'b'], [0.5])).toBe(undefined);
    expect(weightedSample()).toBe(undefined);
  });

  test('should return the only element if there is only one', () => {
    const arr = ['a'];
    const weights = [1];
    expect(weightedSample(arr, weights)).toBe('a');
  });

  test('should always return the element with weight 1 and others 0', () => {
    const arr = ['a', 'b', 'c'];
    const weights = [0, 1, 0];
    for (let i = 0; i < 100; i++) {
      expect(weightedSample(arr, weights)).toBe('b');
    }
  });

  test('should return a value from the array', () => {
    const arr = ['a', 'b', 'c'];
    const weights = [0.2, 0.3, 0.5];
    const sample = weightedSample(arr, weights);
    expect(arr.includes(sample)).toBe(true);
  });

  test('should return elements roughly according to their weights', () => {
    const arr = ['a', 'b'];
    const weights = [9, 1]; // a should appear ~90% of the time
    const samples = { a: 0, b: 0 };
    const totalRuns = 10000;

    for (let i = 0; i < totalRuns; i++) {
      const sample = weightedSample(arr, weights);
      if (sample in samples) {
        samples[sample]++;
      }
    }

    const ratioA = samples.a / totalRuns;
    // Expect ratio to be around 0.9, let's allow some margin for randomness
        expect(ratioA).toBeGreaterThan(0.85);
    expect(ratioA).toBeLessThan(0.95);
  });

  test('should handle zero weights by falling back to uniform distribution', () => {
    const arr = ['a', 'b', 'c'];
    const weights = [0, 0, 0];
    const sample = weightedSample(arr, weights);
    expect(arr.includes(sample)).toBe(true);
  });
});
