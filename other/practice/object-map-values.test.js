const objectMapValues = require('./object-map-values');

test('maps object values', () => {
  const obj = { a: 1, b: 2 };
  expect(objectMapValues(obj, x => x * 2)).toEqual({ a: 2, b: 4 });
});
