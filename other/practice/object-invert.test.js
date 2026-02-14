const { invertObject } = require('./object-invert');

describe('invertObject', () => {
  test('should invert a simple object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(invertObject(obj)).toEqual({ 1: 'a', 2: 'b', 3: 'c' });
  });

  test('should handle objects with string values', () => {
    const obj = { name: 'Alice', role: 'admin' };
    expect(invertObject(obj)).toEqual({ Alice: 'name', admin: 'role' });
  });

  test('should handle duplicate values by overwriting (last key wins)', () => {
    const obj = { a: 'value1', b: 'value2', c: 'value1' };
    expect(invertObject(obj)).toEqual({ value1: 'c', value2: 'b' });
  });

  test('should return an empty object for an empty object', () => {
    expect(invertObject({})).toEqual({});
  });

  test('should throw TypeError if argument is not an object (or null/array)', () => {
    expect(() => invertObject(null)).toThrow(TypeError);
    expect(() => invertObject(undefined)).toThrow(TypeError);
    expect(() => invertObject(123)).toThrow(TypeError);
    expect(() => invertObject('string')).toThrow(TypeError);
    expect(() => invertObject([])).toThrow(TypeError);
    expect(() => invertObject([1, 2, 3])).toThrow(TypeError);
  });

  test('should handle objects with mixed value types', () => {
    const obj = { a: 1, b: 'two', c: true };
    expect(invertObject(obj)).toEqual({ 1: 'a', two: 'b', true: 'c' });
  });

  test('should handle objects with number keys', () => {
    const obj = { 1: 'one', 2: 'two' };
    expect(invertObject(obj)).toEqual({ one: '1', two: '2' });
  });
});
