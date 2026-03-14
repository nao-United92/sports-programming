const frequencyDistribution = require('./array-frequency-distribution');

describe('frequencyDistribution', () => {
  test('calculates distribution correctly', () => {
    const arr = ['a', 'b', 'a', 'c', 'a', 'b'];
    const dist = frequencyDistribution(arr);
    expect(dist).toEqual({
      a: 0.5, // 3/6
      b: 1/3, // 2/6
      c: 1/6, // 1/6
    });
  });

  test('sums up to 1', () => {
    const arr = [1, 2, 3, 4, 5, 2, 3, 4];
    const dist = frequencyDistribution(arr);
    const sum = Object.values(dist).reduce((a, b) => a + b, 0);
    expect(sum).toBeCloseTo(1);
  });

  test('returns empty for empty array', () => {
    expect(frequencyDistribution([])).toEqual({});
  });
});
