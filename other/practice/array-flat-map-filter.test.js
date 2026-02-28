
const flatMapFilter = require('./array-flat-map-filter');

test('maps and filters array', () => {
  const arr = [1, 2, 3, 4];
  const result = flatMapFilter(arr, x => x * 2, x => x > 4);
  expect(result).toEqual([6, 8]);
});
