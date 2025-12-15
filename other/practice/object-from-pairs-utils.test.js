const fromPairs = require('./object-from-pairs-utils');

test('creates an object from an array of key-value pairs', () => {
  const pairs = [['a', 1], ['b', 2], ['c', 3]];
  const result = fromPairs(pairs);
  expect(result).toEqual({ a: 1, b: 2, c: 3 });
});

test('handles an empty array', () => {
  const pairs = [];
  const result = fromPairs(pairs);
  expect(result).toEqual({});
});

test('overwrites earlier values with later ones', () => {
  const pairs = [['a', 1], ['b', 2], ['a', 3]];
  const result = fromPairs(pairs);
  expect(result).toEqual({ a: 3, b: 2 });
});
