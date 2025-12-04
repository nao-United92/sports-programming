import { invert } from './object-invert-utils';

describe('invert', () => {
  test('should invert keys and values', () => {
    const obj = { a: '1', b: '2', c: '3' };
    expect(invert(obj)).toEqual({ '1': 'a', '2': 'b', '3': 'c' });
  });

  test('should handle objects with numeric values', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(invert(obj)).toEqual({ '1': 'a', '2': 'b', '3': 'c' });
  });

  test('should handle empty objects', () => {
    expect(invert({})).toEqual({});
  });

  test('should overwrite keys with duplicate values', () => {
    const obj = { a: '1', b: '2', c: '1' };
    expect(invert(obj)).toEqual({ '1': 'c', '2': 'b' });
  });
});
