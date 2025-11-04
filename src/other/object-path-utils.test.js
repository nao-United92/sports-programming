import { get, set } from './object-path-utils.js';

describe('get', () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3
      }
    },
    f: null,
    g: undefined,
    h: [10, 20, { i: 30 }]
  };

  it('should get a top-level property', () => {
    expect(get(obj, 'a')).toBe(1);
  });

  it('should get a nested property using string path', () => {
    expect(get(obj, 'b.d.e')).toBe(3);
  });

  it('should get a nested property using array path', () => {
    expect(get(obj, ['b', 'd', 'e'])).toBe(3);
  });

  it('should return undefined for a non-existent path', () => {
    expect(get(obj, 'b.d.x')).toBeUndefined();
  });

  it('should return defaultValue for a non-existent path', () => {
    expect(get(obj, 'b.d.x', 'default')).toBe('default');
  });

  it('should return null for a null path segment', () => {
    expect(get(obj, 'f')).toBeNull();
  });

  it('should return undefined for an undefined path segment', () => {
    expect(get(obj, 'g')).toBeUndefined();
  });

  it('should get array elements', () => {
    expect(get(obj, 'h.0')).toBe(10);
    expect(get(obj, 'h.2.i')).toBe(30);
  });
});

describe('set', () => {
  let obj;

  beforeEach(() => {
    obj = {
      a: 1,
      b: {
        c: 2
      }
    };
  });

  it('should set a top-level property', () => {
    set(obj, 'a', 10);
    expect(obj.a).toBe(10);
  });

  it('should set a nested property using string path', () => {
    set(obj, 'b.c', 20);
    expect(obj.b.c).toBe(20);
  });

  it('should set a nested property using array path', () => {
    set(obj, ['b', 'c'], 30);
    expect(obj.b.c).toBe(30);
  });

  it('should create intermediate objects if path does not exist', () => {
    set(obj, 'x.y.z', 100);
    expect(obj.x.y.z).toBe(100);
  });

  it('should overwrite existing values', () => {
    set(obj, 'b.c', 'new value');
    expect(obj.b.c).toBe('new value');
  });

  it('should handle array paths for setting', () => {
    set(obj, 'b.d.0', 'array item');
    expect(obj.b.d[0]).toBe('array item');
  });
});