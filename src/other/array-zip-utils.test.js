const zip = require('./array-zip-utils');

test('zips arrays of the same length', () => {
  expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
});

test('zips arrays of different lengths', () => {
  expect(zip(['a'], [1, 2, 3], [true, false])).toEqual([['a', 1, true], [undefined, 2, false], [undefined, 3, undefined]]);
});

test('zips with an empty array', () => {
  expect(zip(['a', 'b'], [], [1, 2])).toEqual([['a', undefined, 1], ['b', undefined, 2]]);
});

test('zips with no arguments', () => {
  expect(zip()).toEqual([]);
});

test('zips with a single array', () => {
    expect(zip([1, 2, 3])).toEqual([[1], [2], [3]]);
});
