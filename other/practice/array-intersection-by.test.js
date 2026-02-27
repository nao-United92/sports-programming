const intersectionBy = require('./array-intersection-by');

test('intersectionBy calculates intersection with iteratee', () => {
  const result = intersectionBy(Math.floor, [2.1, 1.2], [2.3, 3.4]);
  expect(result).toEqual([2.1]);
});

test('intersectionBy handles objects', () => {
  const result = intersectionBy(x => x.x, [{ x: 1 }, { x: 2 }], [{ x: 1 }]);
  expect(result).toEqual([{ x: 1 }]);
});
