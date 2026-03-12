const sample = require('./array-sample-util');

describe('sample', () => {
  test('returns an element from the array', () => {
    const arr = [1, 2, 3];
    expect(arr).toContain(sample(arr));
  });
  test('returns undefined for empty array', () => {
    expect(sample([])).toBeUndefined();
  });
});
