const sample = require('./array-sample');

describe('sample', () => {
  test('returns a random element from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const element = sample(arr);
    expect(arr).toContain(element);
  });

  test('returns undefined for an empty array', () => {
    expect(sample([])).toBeUndefined();
  });

  test('returns undefined for non-array input', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample(123)).toBeUndefined();
  });
});
