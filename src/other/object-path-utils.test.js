const { get } = require('./object-path-utils');

describe('get', () => {
  const testObj = {
    a: {
      b: {
        c: 'hello',
      },
      d: ['item1', 'item2'],
      e: null,
    },
    f: 123,
  };

  test('should get a value using a string path', () => {
    expect(get(testObj, 'a.b.c')).toBe('hello');
  });

  test('should get a value using an array path', () => {
    expect(get(testObj, ['a', 'b', 'c'])).toBe('hello');
  });

  test('should get an item from an array using a string path', () => {
    expect(get(testObj, 'a.d[0]')).toBe('item1');
  });

  test('should get an item from an array using an array path', () => {
    expect(get(testObj, ['a', 'd', '0'])).toBe('item1');
  });

  test('should return a direct property value', () => {
    expect(get(testObj, 'f')).toBe(123);
  });

  test('should return undefined for a non-existent path', () => {
    expect(get(testObj, 'a.x.y')).toBeUndefined();
  });

  test('should return the default value for a non-existent path', () => {
    expect(get(testObj, 'a.x.y', 'default')).toBe('default');
  });

  test('should return undefined if the path is valid but the value is undefined', () => {
    const objWithUndefined = { a: { b: undefined } };
    expect(get(objWithUndefined, 'a.b')).toBeUndefined();
  });

  test('should return the default value if the path is valid but the value is undefined', () => {
    const objWithUndefined = { a: { b: undefined } };
    expect(get(objWithUndefined, 'a.b', 'default')).toBe('default');
  });

  test('should return null if the resolved value is null', () => {
    expect(get(testObj, 'a.e')).toBeNull();
  });

  test('should return default value if path goes through null or undefined', () => {
    expect(get(testObj, 'a.e.x', 'default')).toBe('default');
  });

  test('should return undefined for null or undefined object', () => {
    expect(get(null, 'a.b')).toBeUndefined();
    expect(get(undefined, 'a.b')).toBeUndefined();
  });

  test('should return default value for null or undefined object', () => {
    expect(get(null, 'a.b', 'default')).toBe('default');
    expect(get(undefined, 'a.b', 'default')).toBe('default');
  });
});