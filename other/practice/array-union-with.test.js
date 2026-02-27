const unionWith = require('./array-union-with');

test('unionWith calculates union with custom comparator', () => {
  const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
  const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
  const result = unionWith((a, b) => a.x === b.x && a.y === b.y, objects, others);
  expect(result).toHaveLength(3);
});
