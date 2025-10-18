const { invert } = require('./invert-utils');

describe('invert', () => {
  test('should invert keys and values', () => {
    const object = { 'a': 1, 'b': 2, 'c': 1 };
    expect(invert(object)).toEqual({ '1': 'c', '2': 'b' });
  });

  test('should handle an empty object', () => {
    expect(invert({})).toEqual({});
  });

  test('should handle numeric keys', () => {
    const object = { 1: 'a', 2: 'b' };
    expect(invert(object)).toEqual({ 'a': '1', 'b': '2' });
  });

  test('should handle numeric values', () => {
    const object = { 'a': 1, 'b': 2 };
    expect(invert(object)).toEqual({ '1': 'a', '2': 'b' });
  });
});