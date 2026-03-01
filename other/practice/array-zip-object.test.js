const arrayZipObject = require('./array-zip-object');

test('creates an object from arrays of properties and values', () => {
  expect(arrayZipObject(['a', 'b', 'c'], [1, 2, 3])).toEqual({ a: 1, b: 2, c: 3 });
});

test('handles arrays of different lengths (values shorter)', () => {
  expect(arrayZipObject(['a', 'b', 'c'], [1, 2])).toEqual({ a: 1, b: 2, c: undefined });
});

test('handles arrays of different lengths (props shorter)', () => {
  expect(arrayZipObject(['a', 'b'], [1, 2, 3])).toEqual({ a: 1, b: 2 });
});
