import { invert } from './object-invert.js';

describe('invert', () => {
  test('should invert keys and values', () => {
    const obj = { a: 1, b: 2, c: 3 };
    // Keys become strings '1', '2', '3'
    expect(invert(obj)).toEqual({ '1': 'a', '2': 'b', '3': 'c' });
  });

  test('should handle duplicate values by overwriting', () => {
    const obj = { a: 1, b: 1 };
    // Last one wins usually
    expect(invert(obj)).toEqual({ '1': 'b' });
  });

  test('should handle empty object', () => {
    expect(invert({})).toEqual({});
  });
});
