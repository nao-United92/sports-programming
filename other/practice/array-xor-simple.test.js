
const xor = require('./array-xor-simple');

test('xor of [1, 2] and [2, 3] should be [1, 3]', () => {
  const result = xor([1, 2], [2, 3]);
  expect(result).toEqual(expect.arrayContaining([1, 3]));
  expect(result.length).toBe(2);
});

test('xor of identical arrays should be empty', () => {
  expect(xor([1, 2], [1, 2])).toEqual([]);
});
