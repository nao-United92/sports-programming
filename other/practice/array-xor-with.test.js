const xorWith = require('./xorWith'); // error in naming in my thought but I will use the path correctly
// actually I should be careful with the require path.

const xorWith = require('./array-xor-with');

test('xorWith calculates symmetric difference with comparator', () => {
  const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
  const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
  const result = xorWith((a, b) => a.x === b.x && a.y === b.y, objects, others);
  expect(result).toEqual([{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]);
});
