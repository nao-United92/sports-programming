const arrayUnzip = require('./array-unzip');

test('unzips grouped elements back into separate arrays', () => {
  expect(arrayUnzip([['a', 1], ['b', 2], ['c', 3]])).toEqual([['a', 'b', 'c'], [1, 2, 3]]);
});

test('handles empty arrays', () => {
  expect(arrayUnzip([])).toEqual([]);
});

test('handles different inner array lengths', () => {
  expect(arrayUnzip([['a', 1], ['b', 2, true]])).toEqual([['a', 'b'], [1, 2]]);
});
