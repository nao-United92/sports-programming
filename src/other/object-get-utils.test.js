const { get } = require('./object-get-utils');

describe('get', () => {
  const obj = {
    a: {
      b: [
        { c: 1 },
        { d: 2 }
      ],
      e: 'hello'
    },
    f: null
  };

  test('should get a value using a string path', () => {
    expect(get(obj, 'a.e')).toBe('hello');
  });

  test('should get a value from an array in the path', () => {
    expect(get(obj, 'a.b[0].c')).toBe(1);
  });

  test('should get a value using an array path', () => {
    expect(get(obj, ['a', 'b', '1', 'd'])).toBe(2);
  });

  test('should return a default value for an undefined path', () => {
    expect(get(obj, 'a.x.y', 'default')).toBe('default');
  });

  test('should return undefined for an undefined path when no default is provided', () => {
    expect(get(obj, 'a.x.y')).toBeUndefined();
  });

  test('should handle null values in the path', () => {
    expect(get(obj, 'f.g', 'default')).toBe('default');
  });

  test('should return the object if path is empty', () => {
    expect(get(obj, [])).toBe(obj);
  });

  test('should return a default value if the path leads to undefined', () => {
    const objWithUndefined = { a: { b: undefined } };
    expect(get(objWithUndefined, 'a.b', 'default')).toBe('default');
  });

  test('should return null if the path leads to null', () => {
    expect(get(obj, 'f')).toBeNull();
  });
});