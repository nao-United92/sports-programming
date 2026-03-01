const objectOmitBy = require('./object-omit-by');

test('omits properties based on function', () => {
  const obj = { a: 1, b: '2', c: 3 };
  expect(objectOmitBy(obj, x => typeof x === 'number')).toEqual({ b: '2' });
});

test('handles empty object', () => {
  expect(objectOmitBy({}, x => x)).toEqual({});
});
