const { get } = require('./object-get-nested-utils');

describe('get', () => {
  const nestedObj = {
    a: {
      b: {
        c: [1, 2, 3],
      },
      d: null,
    },
  };

  test('should get a value from a nested path', () => {
    expect(get(nestedObj, 'a.b.c')).toEqual([1, 2, 3]);
  });

  test('should get a value from a nested path using an array', () => {
    expect(get(nestedObj, ['a', 'b', 'c', 0])).toBe(1);
  });

  test('should return a default value for an undefined path', () => {
    expect(get(nestedObj, 'a.x.y', 'default')).toBe('default');
  });

  test('should return undefined if no default value is provided for an undefined path', () => {
    expect(get(nestedObj, 'a.x.y')).toBeUndefined();
  });

  test('should handle null values in the path', () => {
    expect(get(nestedObj, 'a.d.e', 'default')).toBe('default');
  });

  test('should return the object if the path is empty', () => {
    expect(get(nestedObj, [])).toEqual(nestedObj);
  });

  test('should return a default value if the source is not an object', () => {
    expect(get(null, 'a.b', 'default')).toBe('default');
    expect(get(undefined, 'a.b', 'default')).toBe('default');
  });
});