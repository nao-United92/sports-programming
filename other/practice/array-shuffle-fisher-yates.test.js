
const shuffle = require('./array-shuffle-fisher-yates');

test('shuffle randomizes array order', () => {
  const arr = [1, 2, 3, 4, 5];
  const shuffled = shuffle(arr);
  expect(shuffled).toHaveLength(arr.length);
  expect(shuffled).toEqual(expect.arrayContaining(arr));
});
