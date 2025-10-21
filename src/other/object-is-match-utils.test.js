const { isMatch } = require('./object-is-match-utils.js');

describe('isMatch', () => {
  test('should return true if object contains equivalent property values', () => {
    const object = { a: 1, b: 2 };
    const source = { a: 1 };
    expect(isMatch(object, source)).toBe(true);
  });

  test('should return false if object does not contain equivalent property values', () => {
    const object = { a: 1, b: 2 };
    const source = { a: 2 };
    expect(isMatch(object, source)).toBe(false);
  });

  test('should return true for nested equivalent property values', () => {
    const object = { a: 1, b: { c: 2 } };
    const source = { b: { c: 2 } };
    expect(isMatch(object, source)).toBe(true);
  });

  test('should return false for nested non-equivalent property values', () => {
    const object = { a: 1, b: { c: 2 } };
    const source = { b: { c: 3 } };
    expect(isMatch(object, source)).toBe(false);
  });

  test('should return true if source is empty', () => {
    const object = { a: 1, b: 2 };
    const source = {};
    expect(isMatch(object, source)).toBe(true);
  });

  test('should return false if object is null or undefined', () => {
    const source = { a: 1 };
    expect(isMatch(null, source)).toBe(false);
    expect(isMatch(undefined, source)).toBe(false);
  });

  test('should return false if source is null or undefined', () => {
    const object = { a: 1 };
    expect(isMatch(object, null)).toBe(false);
    expect(isMatch(object, undefined)).toBe(false);
  });

  test('should handle arrays as properties', () => {
    const object = { a: [1, 2], b: 3 };
    const source = { a: [1, 2] };
    expect(isMatch(object, source)).toBe(true);
  });

  test('should handle arrays with different order if isEqual handles it', () => {
    const object = { a: [1, 2], b: 3 };
    const source = { a: [2, 1] }; // isEqual should handle this if it sorts arrays
    expect(isMatch(object, source)).toBe(false); // isMatch uses isEqual, and isEqual does not sort arrays for comparison
  });

  test('should handle objects with extra properties in object', () => {
    const object = { a: 1, b: 2, c: 3 };
    const source = { a: 1, b: 2 };
    expect(isMatch(object, source)).toBe(true);
  });
});
