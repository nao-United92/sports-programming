
const replaceAt = require('./array-replace-at');

test('replaces value at index', () => {
  expect(replaceAt([1, 2, 3], 1, 4)).toEqual([1, 4, 3]);
});
