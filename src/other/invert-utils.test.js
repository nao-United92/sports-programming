import { invert } from './invert-utils.js';

describe('invert', () => {
  test('should invert a simple object', () => {
    const object = { 'a': 1, 'b': 2, 'c': 1 };
    const expected = { '1': 'c', '2': 'b' };
    expect(invert(object)).toEqual(expected);
  });

  test('should handle duplicate values by overwriting', () => {
    const object = { 'a': 'x', 'b': 'y', 'c': 'x' };
    const expected = { 'x': 'c', 'y': 'b' };
    expect(invert(object)).toEqual(expected);
  });

  test('should coerce non-string values to strings for keys', () => {
    const object = { a: 1, b: true, c: null, d: undefined };
    const expected = { '1': 'a', 'true': 'b', 'null': 'c', 'undefined': 'd' };
    expect(invert(object)).toEqual(expected);
  });

  test('should return an empty object for an empty object', () => {
    expect(invert({})).toEqual({});
  });

  test('should return an empty object for null or undefined input', () => {
    expect(invert(null)).toEqual({});
    expect(invert(undefined)).toEqual({});
  });
});
