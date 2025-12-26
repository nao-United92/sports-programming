const {
  toPairs
} = require('./array-to-pairs-utils');

describe('toPairs', () => {
  test('should convert an object to an array of key-value pairs', () => {
    const obj = {
      a: 1,
      b: 2
    };
    expect(toPairs(obj)).toEqual([
      ['a', 1],
      ['b', 2]
    ]);
  });

  test('should handle an empty object', () => {
    expect(toPairs({})).toEqual([]);
  });

  test('should handle non-object input', () => {
    expect(toPairs(null)).toEqual([]);
    expect(toPairs(undefined)).toEqual([]);
    expect(toPairs('hello')).toEqual([]);
    expect(toPairs(123)).toEqual([]);
  });
});