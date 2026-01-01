const { get } = require('./object-get-path-utils');

describe('get', () => {
  const obj = {
    a: {
      b: {
        c: 'hello'
      },
      d: ['e', 'f']
    }
  };

  test('should get a value from a nested object using a string path', () => {
    expect(get(obj, 'a.b.c')).toBe('hello');
  });

  test('should get a value from a nested object using an array path', () => {
    expect(get(obj, ['a', 'b', 'c'])).toBe('hello');
  });

  test('should get an element from an array', () => {
    expect(get(obj, 'a.d.0')).toBe('e');
  });

  test('should return a default value if the path does not exist', () => {
    expect(get(obj, 'a.x.y', 'default')).toBe('default');
  });

  test('should return undefined if the path does not exist and no default is provided', () => {
    expect(get(obj, 'x.y.z')).toBeUndefined();
  });

  test('should handle null and undefined objects', () => {
    expect(get(null, 'a.b')).toBeUndefined();
    expect(get(undefined, 'a.b', 'default')).toBe('default');
  });
});
