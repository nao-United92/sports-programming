import compact from './array-compact-utils';

describe('compact', () => {
  test('should remove falsey values from an array', () => {
    expect(compact([0, 1, false, 2, '', 3, null, undefined, NaN])).toEqual([1, 2, 3]);
  });

  test('should return an empty array if all values are falsey', () => {
    expect(compact([0, false, '', null, undefined, NaN])).toEqual([]);
  });

  test('should return the original array if no falsey values', () => {
    expect(compact([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should handle an empty array', () => {
    expect(compact([])).toEqual([]);
  });
});
