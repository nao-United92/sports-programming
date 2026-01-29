import getDeep from './object-get-deep-utils';

describe('getDeep', () => {
  const obj = {
    a: {
      b: {
        c: 'hello',
        d: [1, 2, 3],
      },
      e: null,
    },
    f: 42,
  };

  it('should get a deeply nested property using dot notation string path', () => {
    expect(getDeep(obj, 'a.b.c')).toBe('hello');
  });

  it('should get a deeply nested property using an array path', () => {
    expect(getDeep(obj, ['a', 'b', 'c'])).toBe('hello');
  });

  it('should get a nested array', () => {
    expect(getDeep(obj, 'a.b.d')).toEqual([1, 2, 3]);
  });

  it('should get a top-level property', () => {
    expect(getDeep(obj, 'f')).toBe(42);
  });

  it('should return undefined for a non-existent path', () => {
    expect(getDeep(obj, 'a.x.y')).toBeUndefined();
  });

  it('should return the default value for a non-existent path', () => {
    expect(getDeep(obj, 'a.x.y', 'default')).toBe('default');
  });

  it('should return a null property', () => {
    expect(getDeep(obj, 'a.e')).toBeNull();
  });

  it('should return the default value for null or undefined object', () => {
    expect(getDeep(null, 'a.b', 'default')).toBe('default');
    expect(getDeep(undefined, 'a.b', 'default')).toBe('default');
  });

  it('should return the default value for null or undefined path', () => {
    expect(getDeep(obj, null, 'default')).toBe('default');
    expect(getDeep(obj, undefined, 'default')).toBe('default');
  });

  it('should handle paths that lead to undefined properties gracefully', () => {
    expect(getDeep(obj, 'a.b.x.y', 'not found')).toBe('not found');
  });
});
