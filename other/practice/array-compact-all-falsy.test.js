const compact = require('./array-compact-all-falsy');

describe('compact', () => {
  test('should remove all falsy values from an array', () => {
    const original = [0, 1, false, 2, '', 3, 'a', null, 'b', undefined, NaN, 'c'];
    const expected = [1, 2, 3, 'a', 'b', 'c'];
    expect(compact(original)).toEqual(expected);
  });

  test('should return an empty array if all values are falsy', () => {
    const original = [0, false, '', null, undefined, NaN];
    expect(compact(original)).toEqual([]);
  });

  test('should return the same array if no values are falsy', () => {
    const original = [1, 'a', {}, []];
    // .toEqual checks for value equality, which is what we want here.
    expect(compact(original)).toEqual(original);
  });

  test('should handle an empty array', () => {
    expect(compact([])).toEqual([]);
  });
});
