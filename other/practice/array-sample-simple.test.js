
const sample = require('./array-sample-simple');

test('sample should return one element from array', () => {
  const arr = [1, 2, 3];
  expect(arr).toContain(sample(arr));
});

test('sample should return undefined for empty array', () => {
  expect(sample([])).toBeUndefined();
});
