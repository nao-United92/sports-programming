const unionBy = require('./array-union-by');

test('unionBy calculates union with iteratee', () => {
  const result = unionBy(Math.floor, [2.1], [1.2, 2.3]);
  expect(result).toEqual([2.1, 1.2]);
});

test('unionBy handles property names', () => {
  const result = unionBy(x => x.x, [{ x: 1 }], [{ x: 2 }, { x: 1 }]);
  expect(result).toEqual([{ x: 1 }, { x: 2 }]);
});
