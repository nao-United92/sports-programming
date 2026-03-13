const getFibonacciSequence = require('./math-fibonacci-sequence');

describe('getFibonacciSequence', () => {
  test('generates sequence for n=5', () => {
    expect(getFibonacciSequence(5)).toEqual([0, 1, 1, 2, 3]);
  });

  test('handles n=1 and n=2', () => {
    expect(getFibonacciSequence(1)).toEqual([0]);
    expect(getFibonacciSequence(2)).toEqual([0, 1]);
  });

  test('returns empty for n=0', () => {
    expect(getFibonacciSequence(0)).toEqual([]);
  });

  test('generates sequence for n=10', () => {
    expect(getFibonacciSequence(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
