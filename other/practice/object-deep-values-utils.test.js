import deepValues from './object-deep-values-utils';

describe('deepValues', () => {
  test('should extract all values from a flat object', () => {
    const obj = { a: 1, b: 'hello', c: true };
    expect(deepValues(obj)).toEqual(expect.arrayContaining([1, 'hello', true]));
    expect(deepValues(obj).length).toBe(3);
  });

  test('should extract all values from a nested object', () => {
    const obj = {
      a: 1,
      b: {
        c: 'world',
        d: {
          e: false,
          f: 123
        }
      },
      g: [4, 5]
    };
    expect(deepValues(obj)).toEqual(expect.arrayContaining([1, 'world', false, 123, [4, 5]]));
    expect(deepValues(obj).length).toBe(5);
  });

  test('should handle arrays as values', () => {
    const obj = { a: [1, 2], b: { c: ['x', 'y'] } };
    expect(deepValues(obj)).toEqual(expect.arrayContaining([[1, 2], ['x', 'y']]));
    expect(deepValues(obj).length).toBe(2);
  });

  test('should handle empty objects', () => {
    expect(deepValues({})).toEqual([]);
  });

  test('should throw an error if the argument is not an object or is null', () => {
    expect(() => deepValues(null)).toThrow(TypeError);
    expect(() => deepValues(undefined)).toThrow(TypeError);
    expect(() => deepValues(123)).toThrow(TypeError);
    expect(() => deepValues('string')).toThrow(TypeError);
  });

  test('should throw an error if the argument is an array', () => {
    expect(() => deepValues([])).toThrow(TypeError);
  });

  test('should handle objects with null or undefined values', () => {
    const obj = { a: 1, b: null, c: undefined, d: { e: null } };
    expect(deepValues(obj)).toEqual(expect.arrayContaining([1, null, undefined, null]));
    expect(deepValues(obj).length).toBe(4);
  });
});
