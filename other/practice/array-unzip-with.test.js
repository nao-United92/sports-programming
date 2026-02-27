const unzipWith = require('./array-unzip-with');

test('unzipWith unzips and combines with iteratee', () => {
  const result = unzipWith([[1, 10, 100], [2, 20, 200]], (a, b) => a + b);
  expect(result).toEqual([3, 30, 300]);
});
