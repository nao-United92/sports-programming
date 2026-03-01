const objectPickBy = require('./object-pick-by');

test('picks properties based on function', () => {
  const obj = { a: 1, b: '2', c: 3 };
  expect(objectPickBy(obj, x => typeof x === 'number')).toEqual({ a: 1, c: 3 });
});

test('handles empty object', () => {
  expect(objectPickBy({}, x => x)).toEqual({});
});
