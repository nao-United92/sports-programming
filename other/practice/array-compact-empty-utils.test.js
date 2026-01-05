const arrayCompactEmpty = require('./array-compact-empty-utils');

describe('arrayCompactEmpty', () => {
  test('should remove null, undefined, and empty strings', () => {
    const arr = [1, null, 'hello', undefined, '', 0, false, 'world'];
    expect(arrayCompactEmpty(arr)).toEqual([1, 'hello', 0, false, 'world']);
  });

  test('should not modify numbers, booleans, or non-empty strings', () => {
    const arr = [1, 'test', true, false, 0, -1, ' '];
    expect(arrayCompactEmpty(arr)).toEqual([1, 'test', true, false, 0, -1, ' ']);
  });

  test('should handle an array with only null, undefined, and empty strings', () => {
    const arr = [null, undefined, '', null];
    expect(arrayCompactEmpty(arr)).toEqual([]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(arrayCompactEmpty(arr)).toEqual([]);
  });

  test('should handle an array with no empty values', () => {
    const arr = [1, 2, 3];
    expect(arrayCompactEmpty(arr)).toEqual([1, 2, 3]);
  });

  test('should throw TypeError if argument is not an array', () => {
    expect(() => arrayCompactEmpty(null)).toThrow(TypeError);
    expect(() => arrayCompactEmpty(123)).toThrow(TypeError);
    expect(() => arrayCompactEmpty('string')).toThrow(TypeError);
  });
});
