import { getProperty } from './object-property-retriever.js';

describe('getProperty', () => {
  const testObj = {
    a: {
      b: {
        c: 'hello',
      },
      d: ['e', 'f'],
    },
    g: null,
  };

  test('should get a deeply nested property', () => {
    expect(getProperty(testObj, 'a.b.c')).toBe('hello');
  });

  test('should get a property with array index', () => {
    expect(getProperty(testObj, 'a.d[0]')).toBe('e');
  });

  test('should return default value for non-existent path', () => {
    expect(getProperty(testObj, 'a.x.y', 'default')).toBe('default');
  });

  test('should return undefined for non-existent path without default value', () => {
    expect(getProperty(testObj, 'a.b.z')).toBeUndefined();
  });

  test('should return default value for null or undefined objects', () => {
    expect(getProperty(null, 'a.b.c', 'default')).toBe('default');
    expect(getProperty(undefined, 'a.b.c', 'default')).toBe('default');
  });

  test('should handle path to a null property', () => {
    expect(getProperty(testObj, 'g', 'default')).toBe(null);
  });
  
  test('should return default value when path is not a string', () => {
    expect(getProperty(testObj, 123, 'default')).toBe('default');
    expect(getProperty(testObj, null, 'default')).toBe('default');
  });
});
