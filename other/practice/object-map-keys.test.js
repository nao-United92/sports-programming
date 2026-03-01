const objectMapKeys = require('./object-map-keys');

test('maps object keys', () => {
  const obj = { a: 1, b: 2 };
  expect(objectMapKeys(obj, (val, key) => key + val)).toEqual({ a1: 1, b2: 2 });
});
