
const shuffle = require('./array-shuffle-simple');

test('shuffle should return array of same length', () => {
  const arr = [1, 2, 3, 4, 5];
  expect(shuffle(arr)).toHaveLength(5);
});

test('shuffle should contain same elements', () => {
  const arr = [1, 2, 3];
  expect(shuffle(arr).sort()).toEqual([1, 2, 3]);
});
