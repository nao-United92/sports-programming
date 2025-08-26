import { get, has } from './object-path-utils.js';

describe('get', () => {
  const obj = {
    a: {
      b: {
        c: [1, 2, 3]
      },
      d: 'hello'
    },
    'e.f': 'world'
  };

  it('should get a nested property value using a string path', () => {
    expect(get(obj, 'a.b.c[0]')).toBe(1);
    expect(get(obj, 'a.d')).toBe('hello');
  });

  it('should get a nested property value using an array path', () => {
    expect(get(obj, ['a', 'b', 'c', '0'])).toBe(1);
  });

  it('should return the default value for non-existent paths', () => {
    expect(get(obj, 'a.b.x', 'default')).toBe('default');
    expect(get(obj, 'x.y.z', null)).toBeNull();
  });

  it('should return undefined for non-existent paths when no default value is provided', () => {
    expect(get(obj, 'a.b.x')).toBeUndefined();
  });

  it('should handle paths with special characters', () => {
    expect(get(obj, 'e.f')).toBe('world');
  });
});

describe('has', () => {
  const obj = {
    a: {
      b: {
        c: 1,
        d: undefined
      }
    },
    'e.f': 2
  };

  it('should return true for existing paths', () => {
    expect(has(obj, 'a.b.c')).toBe(true);
    expect(has(obj, ['a', 'b'])).toBe(true);
  });

  it('should return true for existing paths with undefined values', () => {
    expect(has(obj, 'a.b.d')).toBe(true);
  });

  it('should return false for non-existent paths', () => {
    expect(has(obj, 'a.b.x')).toBe(false);
    expect(has(obj, 'x.y.z')).toBe(false);
  });

  it('should handle paths with special characters', () => {
    expect(has(obj, 'e.f')).toBe(true);
  });

  it('should return false for paths that go through null or undefined', () => {
    expect(has(obj, 'a.b.c.x')).toBe(false);
  });
});