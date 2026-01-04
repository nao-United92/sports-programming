const { mode } = require('./array-mode-utils');

describe('mode', () => {
  test('should return the single mode for a numerical array', () => {
    expect(mode([1, 2, 2, 3, 4])).toEqual([2]);
  });

  test('should return multiple modes for a numerical array', () => {
    const result = mode([1, 2, 2, 3, 3, 4]);
    expect(result).toHaveLength(2);
    expect(result).toContain(2);
    expect(result).toContain(3);
  });

  test('should return all elements if all are unique', () => {
    const result = mode([1, 2, 3, 4, 5]);
    expect(result).toHaveLength(5);
    expect(result).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
  });

  test('should return an empty array for an empty input array', () => {
    expect(mode([])).toEqual([]);
  });

  test('should return the element itself for a single-element array', () => {
    expect(mode([42])).toEqual([42]);
  });

  test('should handle string arrays', () => {
    const result = mode(['apple', 'banana', 'apple', 'orange', 'banana']);
    expect(result).toHaveLength(2);
    expect(result).toContain('apple');
    expect(result).toContain('banana');
  });

  test('should handle mixed primitive types', () => {
    const result = mode([1, 'a', 1, 'b', 'a']);
    expect(result).toHaveLength(2);
    expect(result).toContain(1);
    expect(result).toContain('a');
  });

  test('should handle objects (using JSON.stringify for comparison)', () => {
    const obj1 = { id: 1, name: 'A' };
    const obj2 = { id: 2, name: 'B' };
    const obj3 = { id: 1, name: 'A' }; // Same as obj1
    const obj4 = { id: 3, name: 'C' };
    const result = mode([obj1, obj2, obj3, obj4]);
    expect(result).toEqual([obj1]); // Expecting obj1 as the mode
  });

  test('should handle objects with multiple modes', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { a: 1 };
    const obj4 = { b: 2 };
    const result = mode([obj1, obj2, obj3, obj4]);
    expect(result).toHaveLength(2);
    expect(result).toContainEqual(obj1);
    expect(result).toContainEqual(obj2);
  });

  test('should throw TypeError if input is not an array', () => {
    expect(() => mode(null)).toThrow(TypeError);
    expect(() => mode(undefined)).toThrow(TypeError);
    expect(() => mode(123)).toThrow(TypeError);
    expect(() => mode('string')).toThrow(TypeError);
    expect(() => mode({})).toThrow(TypeError);
  });
});