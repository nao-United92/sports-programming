// other/practice/array-sample-utils.test.js

const arraySample = require('./array-sample-utils');

describe('arraySample', () => {
  test('should return undefined for an empty array', () => {
    expect(arraySample([])).toBeUndefined();
  });

  test('should return the only element for a single-element array', () => {
    expect(arraySample([10])).toBe(10);
  });

  test('should return an element from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const sample = arraySample(arr);
    expect(arr).toContain(sample);
  });

  test('should return different elements over multiple calls (probabilistic)', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const samples = new Set();
    const iterations = 1000;
    for (let i = 0; i < iterations; i++) {
      samples.add(arraySample(arr));
    }
    // With 10 elements and 1000 iterations, it's highly probable to get more than one unique sample
    expect(samples.size).toBeGreaterThan(1);
    expect(samples.size).toBeLessThanOrEqual(arr.length);
  });

  test('should handle non-array input by returning undefined', () => {
    expect(arraySample(null)).toBeUndefined();
    expect(arraySample(undefined)).toBeUndefined();
    expect(arraySample(123)).toBeUndefined();
    expect(arraySample('string')).toBeUndefined();
    expect(arraySample({})).toBeUndefined();
  });
});
