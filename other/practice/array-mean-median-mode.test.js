
const arrayMeanMedianMode = require('./array-mean-median-mode');

describe('arrayMeanMedianMode', () => {
  test('calculates statistics for odd length array', () => {
    const result = arrayMeanMedianMode([1, 2, 3, 4, 5]);
    expect(result.mean).toBe(3);
    expect(result.median).toBe(3);
    expect(result.mode).toEqual([1, 2, 3, 4, 5]);
  });

  test('calculates statistics for even length array', () => {
    const result = arrayMeanMedianMode([1, 2, 3, 4]);
    expect(result.mean).toBe(2.5);
    expect(result.median).toBe(2.5);
  });

  test('finds single mode', () => {
    const result = arrayMeanMedianMode([1, 2, 2, 3]);
    expect(result.mode).toEqual([2]);
  });

  test('finds multiple modes', () => {
    const result = arrayMeanMedianMode([1, 1, 2, 2, 3]);
    expect(result.mode).toEqual([1, 2]);
  });
});
