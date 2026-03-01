const arrayShuffle = require('./array-shuffle');

test('shuffles the array', () => {
  const arr = [1, 2, 3, 4, 5];
  const original = [...arr];
  const shuffled = arrayShuffle(arr);
  expect(shuffled).toHaveLength(original.length);
  expect(shuffled.sort()).toEqual(original.sort());
});
