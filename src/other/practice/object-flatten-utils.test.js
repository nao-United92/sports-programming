import { flattenObject } from './object-flatten-utils.js';

describe('flattenObject', () => {
  test('should flatten a nested object', () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: { e: 3 },
      },
      f: [4, 5],
    };
    const expected = {
      'a': 1,
      'b.c': 2,
      'b.d.e': 3,
      'f': [4, 5],
    };
    expect(flattenObject(obj)).toEqual(expected);
  });

  test('should handle an empty object', () => {
    expect(flattenObject({})).toEqual({});
  });

  test('should handle an object with no nesting', () => {
    const obj = { a: 1, b: 2 };
    expect(flattenObject(obj)).toEqual(obj);
  });

  test('should handle null and undefined values', () => {
    const obj = { a: null, b: { c: undefined } };
    const expected = { a: null, 'b.c': undefined };
    expect(flattenObject(obj)).toEqual(expected);
  });
});
