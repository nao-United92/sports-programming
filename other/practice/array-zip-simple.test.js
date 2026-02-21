
const zip = require('./array-zip-simple');

test('zip should combine arrays', () => {
  expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
});

test('zip should truncate to shortest array', () => {
  expect(zip(['a', 'b'], [1, 2, 3])).toEqual([['a', 1], ['b', 2]]);
});
