
const sample = require('./array-sample');

test('returns random element', () => {
  const arr = [1, 2, 3];
  expect(arr).toContain(sample(arr));
});
