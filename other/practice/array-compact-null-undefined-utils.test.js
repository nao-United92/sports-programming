const compactNullUndefined = require('./array-compact-null-undefined-utils');

describe('compactNullUndefined', () => {
  test('should remove null and undefined values from an array', () => {
    const arr = [1, null, 2, undefined, 3, null, 4];
    expect(compactNullUndefined(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should return the same array if no null or undefined values', () => {
    const arr = [1, 2, 3, 4];
    expect(compactNullUndefined(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should return an empty array if all values are null or undefined', () => {
    const arr = [null, undefined, null];
    expect(compactNullUndefined(arr)).toEqual([]);
  });

  test('should handle empty array', () => {
    expect(compactNullUndefined([])).toEqual([]);
  });

  test('should handle arrays with falsy values other than null/undefined', () => {
    const arr = [0, false, '', null, undefined, 'hello'];
    expect(compactNullUndefined(arr)).toEqual([0, false, '', 'hello']);
  });

  test('should throw an error for non-array input', () => {
    expect(() => compactNullUndefined(null)).toThrow('Expected an array');
    expect(() => compactNullUndefined(123)).toThrow('Expected an array');
    expect(() => compactNullUndefined('string')).toThrow('Expected an array');
    expect(() => compactNullUndefined({})).toThrow('Expected an array');
  });
});
