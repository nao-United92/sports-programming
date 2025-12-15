const compact = require('./array-compact-utils');

test('removes all falsy values from an array', () => {
  const arr = [0, 1, false, 2, '', 3, null, 'a', undefined, NaN];
  const result = compact(arr);
  expect(result).toEqual([1, 2, 3, 'a']);
});

test('returns an empty array when given an empty array', () => {
  const arr = [];
  const result = compact(arr);
  expect(result).toEqual([]);
});

test('returns an empty array when all values are falsy', () => {
  const arr = [0, false, '', null, undefined, NaN];
  const result = compact(arr);
  expect(result).toEqual([]);
});

test('does not remove truthy values', () => {
  const arr = [1, 'hello', true, {}, []];
  const result = compact(arr);
  expect(result).toEqual([1, 'hello', true, {}, []]);
});