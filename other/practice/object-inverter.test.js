const { invert } = require('./object-inverter.js');

describe('invert', () => {
  test('should invert keys and values of an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(invert(obj)).toEqual({ 1: 'a', 2: 'b', 3: 'c' });
  });

  test('should handle duplicate values by taking the last key', () => {
    const obj = { a: 1, b: 2, c: 1 };
    expect(invert(obj)).toEqual({ 1: 'c', 2: 'b' });
  });

  test('should handle empty object', () => {
    expect(invert({})).toEqual({});
  });

  test('should return a new object instance', () => {
    const obj = { a: 1 };
    const inverted = invert(obj);
    expect(inverted).not.toBe(obj);
  });

  test('should throw an error if the argument is not an object', () => {
    expect(() => invert(null)).toThrow('Expected an object for the first argument.');
    expect(() => invert(undefined)).toThrow('Expected an object for the first argument.');
    expect(() => invert(123)).toThrow('Expected an object for the first argument.');
    expect(() => invert('string')).toThrow('Expected an object for the first argument.');
    expect(() => invert([])).toThrow('Expected an object for the first argument.');
  });

  test('should handle numeric keys', () => {
    const obj = { 1: 'a', 2: 'b' };
    expect(invert(obj)).toEqual({ a: '1', b: '2' });
  });
});
