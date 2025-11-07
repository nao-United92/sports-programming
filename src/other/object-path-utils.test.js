import { get } from './object-path-utils.js';

describe('get', () => {
  const obj = {
    a: {
      b: [
        { c: 1 },
        { d: 2 }
      ],
      e: null
    }
  };

  it('should get a nested property using a string path', () => {
    expect(get(obj, 'a.b[0].c')).toBe(1);
  });

  it('should get a nested property using an array path', () => {
    expect(get(obj, ['a', 'b', '0', 'c'])).toBe(1);
  });

  it('should return undefined for a non-existent path', () => {
    expect(get(obj, 'a.b[2].f')).toBeUndefined();
  });

  it('should return the default value for a non-existent path', () => {
    expect(get(obj, 'x.y.z', 'default')).toBe('default');
  });

  it('should return the default value when an intermediate path is undefined', () => {
    expect(get(obj, 'a.c.d', 'default')).toBe('default');
  });

  it('should return null when the resolved value is null', () => {
    expect(get(obj, 'a.e')).toBeNull();
  });

  it('should return the default value when an intermediate path is null', () => {
    expect(get(obj, 'a.e.f', 'default')).toBe('default');
  });

  it('should return undefined if the object is null or undefined', () => {
    expect(get(null, 'a.b')).toBeUndefined();
    expect(get(undefined, 'a.b', 'default')).toBe('default');
  });
});
