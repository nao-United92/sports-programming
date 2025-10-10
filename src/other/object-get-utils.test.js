const { get } = require('./object-get-utils.js');

describe('get', () => {
  const obj = {
    a: {
      b: {
        c: [1, 2, 3],
      },
      d: null,
    },
  };

  test('should get a nested property value using a string path', () => {
    expect(get(obj, 'a.b.c[0]')).toBe(1);
    expect(get(obj, 'a.b.c')).toEqual([1, 2, 3]);
  });

  test('should get a nested property value using an array path', () => {
    expect(get(obj, ['a', 'b', 'c', '2'])).toBe(3);
    expect(get(obj, ['a', 'b'])).toEqual({ c: [1, 2, 3] });
  });

  test('should return undefined for a non-existent path', () => {
    expect(get(obj, 'a.x.y')).toBeUndefined();
  });

  test('should return the default value for a non-existent path', () => {
    expect(get(obj, 'a.x.y', 'default')).toBe('default');
  });

  test('should return the default value when the resolved value is undefined', () => {
    const objWithUndefined = { a: { b: undefined } };
    expect(get(objWithUndefined, 'a.b', 'default')).toBe('default');
  });

  test('should handle null values in the path', () => {
    expect(get(obj, 'a.d.e')).toBeUndefined();
    expect(get(obj, 'a.d.e', 'default')).toBe('default');
  });

  test('should return undefined if the object is null or undefined', () => {
    expect(get(null, 'a.b')).toBeUndefined();
    expect(get(undefined, 'a.b', 'default')).toBe('default');
  });
});
