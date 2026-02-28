
const unzip = require('./array-unzip');

test('unzips array of arrays', () => {
  expect(unzip([['a', 1, true], ['b', 2, false]])).toEqual([
    ['a', 'b'],
    [1, 2],
    [true, false]
  ]);
});
