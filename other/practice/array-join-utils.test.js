const join = require('./array-join-utils');

test('joins the elements of an array with a separator', () => {
  const arr = ['a', 'b', 'c'];
  const result = join(arr, '~');
  expect(result).toBe('a~b~c');
});

test('uses a comma as the default separator', () => {
  const arr = ['a', 'b', 'c'];
  const result = join(arr);
  expect(result).toBe('a,b,c');
});

test('returns an empty string for an empty array', () => {
  const arr = [];
  const result = join(arr);
  expect(result).toBe('');
});
