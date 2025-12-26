const {
  fromEntries
} = require('./array-from-entries-utils');

describe('fromEntries', () => {
  test('should create an object from key-value pairs', () => {
    const entries = [
      ['a', 1],
      ['b', 2]
    ];
    expect(fromEntries(entries)).toEqual({
      a: 1,
      b: 2
    });
  });

  test('should handle an empty array', () => {
    expect(fromEntries([])).toEqual({});
  });

  test('should handle non-array input', () => {
    expect(fromEntries(null)).toEqual({});
    expect(fromEntries(undefined)).toEqual({});
  });

  test('should overwrite earlier values with later ones', () => {
    const entries = [
      ['a', 1],
      ['b', 2],
      ['a', 3]
    ];
    expect(fromEntries(entries)).toEqual({
      a: 3,
      b: 2
    });
  });
});