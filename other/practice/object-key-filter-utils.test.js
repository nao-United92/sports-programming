const { filterKeys } = require('./object-key-filter-utils');

describe('filterKeys', () => {
  const obj = { a: 1, b: 'hello', c: true, d: null };

  test('should return an object with only the specified keys', () => {
    expect(filterKeys(obj, ['a', 'c'])).toEqual({ a: 1, c: true });
  });

  test('should ignore keys that are not in the original object', () => {
    expect(filterKeys(obj, ['a', 'e'])).toEqual({ a: 1 });
  });

  test('should return an empty object if no keys are specified', () => {
    expect(filterKeys(obj, [])).toEqual({});
  });

  test('should return an empty object if the original object is empty', () => {
    expect(filterKeys({}, ['a', 'b'])).toEqual({});
  });

  test('should handle cases where all keys are filtered', () => {
    expect(filterKeys(obj, ['a', 'b', 'c', 'd'])).toEqual({ a: 1, b: 'hello', c: true, d: null });
  });

  test('should return an empty object if no matching keys are found', () => {
    expect(filterKeys(obj, ['x', 'y'])).toEqual({});
  });
});
