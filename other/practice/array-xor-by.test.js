const xorBy = require('./array-xor-by');

test('xorBy calculates symmetric difference with iteratee', () => {
  expect(xorBy(Math.floor, [2.1, 1.2], [2.3, 3.4])).toEqual([1.2, 3.4]);
});
