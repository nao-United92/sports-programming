const zipWith = require('./array-zip-with');

test('zipWith zips and combines with iteratee', () => {
  expect(zipWith((a, b) => a + b, [1, 2], [10, 20])).toEqual([11, 22]);
});
