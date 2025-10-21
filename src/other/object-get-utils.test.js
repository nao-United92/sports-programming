const { get } = require('./object-get-utils');

describe('get', () => {
  const testObj = {
    a: {
      b: {
        c: 'hello'
      },
      d: ['one', 'two']
    },
    e: null
  };

  it('should get a nested property using a string path', () => {
    expect(get(testObj, 'a.b.c')).toBe('hello');
  });

  it('should get a nested property using an array path', () => {
    expect(get(testObj, ['a', 'b', 'c'])).toBe('hello');
  });

  it('should get an array element by index', () => {
    expect(get(testObj, 'a.d[1]')).toBe('two');
  });

  it('should return undefined for a non-existent path', () => {
    expect(get(testObj, 'a.b.x')).toBeUndefined();
  });

  it('should return the default value for a non-existent path', () => {
    expect(get(testObj, 'a.b.x', 'default')).toBe('default');
  });

  it('should return undefined when the path goes through a null or undefined value', () => {
    expect(get(testObj, 'e.f')).toBeUndefined();
    expect(get(testObj, 'x.y.z')).toBeUndefined();
  });

  it('should return the default value when the path goes through a null or undefined value', () => {
    expect(get(testObj, 'e.f', 'default')).toBe('default');
    expect(get(testObj, 'x.y.z', 'fallback')).toBe('fallback');
  });

  it('should return the value if it is falsy (but not undefined)', () => {
    const objWithFalsy = { a: { b: 0, c: '', d: false, e: null } };
    expect(get(objWithFalsy, 'a.b')).toBe(0);
    expect(get(objWithFalsy, 'a.c')).toBe('');
    expect(get(objWithFalsy, 'a.d')).toBe(false);
    expect(get(objWithFalsy, 'a.e')).toBeNull();
  });

  it('should handle non-object inputs gracefully', () => {
    expect(get(null, 'a.b')).toBeUndefined();
    expect(get(undefined, 'a.b')).toBeUndefined();
    expect(get(42, 'a.b')).toBeUndefined();
    expect(get(null, 'a.b', 'default')).toBe('default');
  });
});