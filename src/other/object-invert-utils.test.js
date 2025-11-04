
import { invert } from './object-invert-utils.js';

describe('invert', () => {
  test('should invert a simple object', () => {
    const object = { a: '1', b: '2', c: '3' };
    expect(invert(object)).toEqual({ '1': 'a', '2': 'b', '3': 'c' });
  });

  test('should handle key collisions by taking the last one', () => {
    const object = { a: '1', b: '2', c: '1' };
    expect(invert(object)).toEqual({ '1': 'c', '2': 'b' });
  });

  test('should work with numeric values', () => {
    const object = { a: 1, b: 2 };
    expect(invert(object)).toEqual({ '1': 'a', '2': 'b' });
  });

  test('should return an empty object for null or undefined input', () => {
    expect(invert(null)).toEqual({});
    expect(invert(undefined)).toEqual({});
  });
});
