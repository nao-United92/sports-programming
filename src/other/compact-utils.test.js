const { compact } = require('./compact-utils.js');

describe('compact', () => {
  test('should remove falsey values from an array', () => {
    const array = [0, 1, false, 2, '', 3, null, 'a', undefined, NaN];
    expect(compact(array)).toEqual([1, 2, 3, 'a']);
  });

  test('should return an empty array for an array with only falsey values', () => {
    const array = [0, false, '', null, undefined, NaN];
    expect(compact(array)).toEqual([]);
  });

  test('should return the same array if no falsey values are present', () => {
    const array = [1, 2, 3, 'a'];
    expect(compact(array)).toEqual([1, 2, 3, 'a']);
  });

  test('should handle an empty array', () => {
    const array = [];
    expect(compact(array)).toEqual([]);
  });

  test('should not modify the original array', () => {
    const array = [0, 1, false, 2];
    compact(array);
    expect(array).toEqual([0, 1, false, 2]);
  });
});
