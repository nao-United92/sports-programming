const mapValues = require('./array-map-values');

test('mapValues transforms values in objects of an array', () => {
  const users = [
    { a: 1, b: 2 },
    { a: 3, b: 4 }
  ];
  const result = mapValues(users, (n) => n * 2);
  expect(result).toEqual([
    { a: 2, b: 4 },
    { a: 6, b: 8 }
  ]);
});
