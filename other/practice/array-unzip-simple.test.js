
const unzip = require('./array-unzip-simple');

test('unzip should regroup elements', () => {
  expect(unzip([['a', 1], ['b', 2]])).toEqual([['a', 'b'], [1, 2]]);
});

test('unzip should handle empty array', () => {
  expect(unzip([])).toEqual([]);
});
