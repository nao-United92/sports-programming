const { get } = require('./object-get-utils');

describe('get', () => {
  const nestedObj = {
    a: {
      b: {
        c: 'value',
      },
      d: ['item1', { e: 'item2' }],
    },
    f: null,
    '': 'empty string key',
  };

  test('should get a deeply nested property using a string path', () => {
    expect(get(nestedObj, 'a.b.c')).toBe('value');
  });

  test('should get a deeply nested property using an array path', () => {
    expect(get(nestedObj, ['a', 'b', 'c'])).toBe('value');
  });

  test('should get an array item using bracket notation', () => {
    expect(get(nestedObj, 'a.d[0]')).toBe('item1');
  });

  test('should get a nested property within an array item', () => {
    expect(get(nestedObj, 'a.d[1].e')).toBe('item2');
  });

  test('should return undefined for a non-existent path', () => {
    expect(get(nestedObj, 'a.x.y')).toBeUndefined();
  });

  test('should return the default value for a non-existent path', () => {
    expect(get(nestedObj, 'a.x.y', 'default')).toBe('default');
  });

  test('should return the default value if the path leads to an undefined value', () => {
    const objWithUndefined = { a: { b: undefined } };
    expect(get(objWithUndefined, 'a.b', 'default')).toBe('default');
  });

  test('should return null if the resolved value is null', () => {
    expect(get(nestedObj, 'f', 'default')).toBeNull();
  });

  test('should return the default value for a null or undefined object', () => {
    expect(get(null, 'a.b', 'default')).toBe('default');
    expect(get(undefined, 'a.b', 'default')).toBe('default');
  });

  test('should handle an empty array path by returning the object', () => {
    expect(get(nestedObj, [])).toBe(nestedObj);
  });

  test('should handle an empty string path by returning the object', () => {
    expect(get(nestedObj, '')).toBe(nestedObj);
  });

  test('should handle an empty path on a null object', () => {
    expect(get(null, [], 'default')).toBe(null);
    expect(get(undefined, [], 'default')).toBe('default');
  });
});