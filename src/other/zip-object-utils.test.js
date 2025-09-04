import zipObject from './zip-object-utils.js';

describe('zipObject', () => {
  test('should create an object from two arrays', () => {
    expect(zipObject(['a', 'b'], [1, 2])).toEqual({ a: 1, b: 2 });
  });

  test('should ignore extra keys if values array is shorter', () => {
    expect(zipObject(['a', 'b', 'c'], [1, 2])).toEqual({ a: 1, b: 2 });
  });

  test('should ignore extra values if keys array is shorter', () => {
    expect(zipObject(['a', 'b'], [1, 2, 3])).toEqual({ a: 1, b: 2 });
  });

  test('should return an empty object if keys array is empty', () => {
    expect(zipObject([], [1, 2])).toEqual({});
  });

  test('should return an empty object if values array is empty', () => {
    expect(zipObject(['a', 'b'], [])).toEqual({});
  });

  test('should handle null or undefined inputs gracefully', () => {
    expect(zipObject(null, [1, 2])).toEqual({});
    expect(zipObject(['a', 'b'], undefined)).toEqual({});
    expect(zipObject(null, null)).toEqual({});
  });

  test('should handle keys that are not strings', () => {
    expect(zipObject([1, true], ['a', 'b'])).toEqual({ '1': 'a', 'true': 'b' });
  });
});
