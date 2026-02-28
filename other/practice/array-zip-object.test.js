
const zipObject = require('./array-zip-object');

test('zips arrays to object', () => {
  expect(zipObject(['a', 'b'], [1, 2])).toEqual({ a: 1, b: 2 });
});
