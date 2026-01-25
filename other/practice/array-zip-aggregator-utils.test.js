const { zip } = require('./array-zip-aggregator-utils');

describe('zip', () => {
  test('should zip together arrays of the same length', () => {
    const a = [1, 2, 3];
    const b = ['a', 'b', 'c'];
    const c = [true, false, true];
    expect(zip(a, b, c)).toEqual([
      [1, 'a', true],
      [2, 'b', false],
      [3, 'c', true],
    ]);
  });

  test('should handle arrays of different lengths by padding with undefined', () => {
    const a = [1, 2];
    const b = ['a', 'b', 'c'];
    expect(zip(a, b)).toEqual([
      [1, 'a'],
      [2, 'b'],
      [undefined, 'c'],
    ]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(zip()).toEqual([]);
  });

  test('should handle empty arrays', () => {
    const a = [];
    const b = [1, 2];
    expect(zip(a, b)).toEqual([
      [undefined, 1],
      [undefined, 2],
    ]);
  });

  test('should work with a single array', () => {
    const a = [1, 2, 3];
    expect(zip(a)).toEqual([[1], [2], [3]]);
  });
});
