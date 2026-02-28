
const sampleSize = require('./array-sample-size');

test('returns n random elements', () => {
  const arr = [1, 2, 3, 4, 5];
  const result = sampleSize(arr, 2);
  expect(result).toHaveLength(2);
  expect(arr).toEqual(expect.arrayContaining(result));
});
