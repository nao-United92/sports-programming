const arraySample = require('./array-sample');

test('returns a random element from the array', () => {
  const arr = [1, 2, 3];
  expect(arr).toContain(arraySample(arr));
});

test('returns undefined for empty array', () => {
  expect(arraySample([])).toBeUndefined();
});
