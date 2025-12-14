import invert from './object-invert-utils';

describe('invert', () => {
  test('should invert the key-value pairs of an object', () => {
    expect(invert({ a: '1', b: '2' })).toEqual({ '1': 'a', '2': 'b' });
  });

  test('should handle objects with duplicate values by keeping the last key', () => {
    expect(invert({ a: '1', b: '2', c: '1' })).toEqual({ '1': 'c', '2': 'b' });
  });

  test('should handle an empty object', () => {
    expect(invert({})).toEqual({});
  });
});
