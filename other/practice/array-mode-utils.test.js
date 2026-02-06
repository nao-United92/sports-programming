const mode = require('./array-mode-utils');

describe('mode', () => {
  test('should return the mode for an array with a single mode', () => {
    expect(mode([1, 2, 2, 3, 4])).toEqual([2]);
    expect(mode(['a', 'b', 'b', 'c'])).toEqual(['b']);
  });

  test('should return all modes for an array with multiple modes', () => {
    expect(mode([1, 2, 2, 3, 3, 4])).toEqual([2, 3]);
    expect(mode(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b']);
  });

  test('should return all elements if all elements appear once', () => {
    const result = mode([1, 2, 3, 4]);
    // The order might vary due to object key iteration, so check content
    expect(result).toHaveLength(4);
    expect(result).toContain(1);
    expect(result).toContain(2);
    expect(result).toContain(3);
    expect(result).toContain(4);
  });

  test('should handle an empty array', () => {
    expect(mode([])).toEqual([]);
  });

  test('should handle a single-element array', () => {
    expect(mode([7])).toEqual([7]);
  });

  test('should handle arrays with mixed types', () => {
    const result = mode([1, 'a', null, 1, 'b', null]);
    expect(result).toHaveLength(2);
    expect(result).toContain(1);
    expect(result).toContain(null);
  });

  test('should handle objects/arrays as elements (by reference, so they are distinct)', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const arr = [obj1, obj2, obj1];
    expect(mode(arr)).toEqual([obj1]);
  });

  test('should throw an error for non-array input', () => {
    expect(() => mode(null)).toThrow('Expected an array');
    expect(() => mode(123)).toThrow('Expected an array');
    expect(() => mode('string')).toThrow('Expected an array');
    expect(() => mode({})).toThrow('Expected an array');
  });
});