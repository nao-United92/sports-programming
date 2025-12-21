const invert = require('./object-invert-utils');

describe('invert', () => {
  test('should invert an object with unique values', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(invert(obj)).toEqual({ 1: ['a'], 2: ['b'], 3: ['c'] });
  });

  test('should group keys for duplicate values', () => {
    const obj = { a: 1, b: 2, c: 1 };
    expect(invert(obj)).toEqual({ 1: ['a', 'c'], 2: ['b'] });
  });

  test('should handle an empty object', () => {
    expect(invert({})).toEqual({});
  });

  test('should handle an object with non-string keys', () => {
    const obj = { 1: 'a', 2: 'b' };
    expect(invert(obj)).toEqual({ a: ['1'], b: ['2'] });
  });

  test('should return an empty object for null or non-object inputs', () => {
    expect(invert(null)).toEqual({});
    expect(invert(undefined)).toEqual({});
    expect(invert(123)).toEqual({});
    expect(invert('string')).toEqual({});
  });
});