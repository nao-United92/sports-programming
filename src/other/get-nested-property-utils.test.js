import { get } from './get-nested-property-utils.js';

describe('get', () => {
  const testObj = {
    a: {
      b: {
        c: 'hello',
      },
      d: ['item1', { e: 'item2' }],
      f: null,
    },
  };

  test('should get a top-level property', () => {
    expect(get(testObj, 'a')).toEqual(testObj.a);
  });

  test('should get a deeply nested property with string path', () => {
    expect(get(testObj, 'a.b.c')).toBe('hello');
  });

  test('should get a deeply nested property with array path', () => {
    expect(get(testObj, ['a', 'b', 'c'])).toBe('hello');
  });

  test('should get a property from an array index', () => {
    expect(get(testObj, 'a.d[0]')).toBe('item1');
    expect(get(testObj, 'a.d[1].e')).toBe('item2');
  });

  test('should return undefined for a non-existent path', () => {
    expect(get(testObj, 'a.x.y')).toBeUndefined();
  });

  test('should return the default value for a non-existent path', () => {
    expect(get(testObj, 'a.x.y', 'default')).toBe('default');
  });

  test('should return the default value when path is partially valid', () => {
    expect(get(testObj, 'a.b.z', 'not found')).toBe('not found');
  });

  test('should return the default value if the object is null or undefined', () => {
    expect(get(null, 'a.b', 'default')).toBe('default');
    expect(get(undefined, ['a', 'b'], 'default')).toBe('default');
  });

  test('should return a null value if it exists at the path', () => {
    expect(get(testObj, 'a.f', 'default')).toBeNull();
  });

  test('should handle empty path', () => {
    expect(get(testObj, '', 'default')).toBe('default');
    expect(get(testObj, [], 'default')).toBe(testObj);
  });
});
