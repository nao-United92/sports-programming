import objectSize from './object-size-utils';

describe('objectSize', () => {
  test('should return the correct size for an object with properties', () => {
    expect(objectSize({ a: 1, b: 2, c: 3 })).toBe(3);
  });

  test('should return 0 for an empty object', () => {
    expect(objectSize({})).toBe(0);
  });

  test('should not count inherited properties', () => {
    const proto = { inherited: 1 };
    const obj = Object.create(proto);
    obj.own = 2;
    expect(objectSize(obj)).toBe(1);
  });

  test('should count properties with undefined or null values', () => {
    expect(objectSize({ a: undefined, b: null })).toBe(2);
  });

  test('should throw an error if the argument is not an object or is null', () => {
    expect(() => objectSize(null)).toThrow(TypeError);
    expect(() => objectSize(undefined)).toThrow(TypeError);
    expect(() => objectSize(123)).toThrow(TypeError);
    expect(() => objectSize('string')).toThrow(TypeError);
    expect(() => objectSize([])).toThrow(TypeError); // Arrays are objects, but typically not what 'object size' implies
  });
});
