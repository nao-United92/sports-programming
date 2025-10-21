const { tally } = require('./array-tally-utils.js');

describe('tally', () => {
  test('should count the occurrences of each element in an array of numbers', () => {
    const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
    const expected = { '1': 1, '2': 2, '3': 3, '4': 4 };
    expect(tally(arr)).toEqual(expected);
  });

  test('should count the occurrences of each element in an array of strings', () => {
    const arr = ['a', 'b', 'a', 'c', 'b', 'a'];
    const expected = { 'a': 3, 'b': 2, 'c': 1 };
    expect(tally(arr)).toEqual(expected);
  });

  test('should handle an empty array', () => {
    expect(tally([])).toEqual({});
  });

  test('should handle an array with one element', () => {
    expect(tally([5])).toEqual({ '5': 1 });
  });

  test('should handle an array with mixed types', () => {
    const arr = [1, 'a', 1, null, undefined, 'a', null];
    const expected = { '1': 2, 'a': 2, 'null': 2, 'undefined': 1 };
    expect(tally(arr)).toEqual(expected);
  });
});
