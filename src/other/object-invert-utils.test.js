import { invert } from './object-invert-utils.js';

describe('invert', () => {
  test('should invert the keys and values of an object', () => {
    const obj = { a: '1', b: '2', c: '3' };
    const expected = { '1': 'a', '2': 'b', '3': 'c' };
    expect(invert(obj)).toEqual(expected);
  });

  test('should handle object with non-string values', () => {
    const obj = { a: 1, b: 2 };
    const expected = { '1': 'a', '2': 'b' };
    expect(invert(obj)).toEqual(expected);
  });

  test('should handle empty object', () => {
    expect(invert({})).toEqual({});
  });
});