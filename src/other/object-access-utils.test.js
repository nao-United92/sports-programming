import { get, pick } from './object-access-utils';

describe('get', () => {
  const obj = {
    a: {
      b: {
        c: 1,
      },
      d: ['e', 'f'],
    },
  };

  it('should get a nested property using a string path', () => {
    expect(get(obj, 'a.b.c')).toBe(1);
  });

  it('should get a nested property using an array path', () => {
    expect(get(obj, ['a', 'b', 'c'])).toBe(1);
  });

  it('should return undefined for a non-existent path', () => {
    expect(get(obj, 'a.x.y')).toBeUndefined();
  });

  it('should return the default value for a non-existent path', () => {
    expect(get(obj, 'a.x.y', 'default')).toBe('default');
  });

  it('should handle null or undefined objects gracefully', () => {
    expect(get(null, 'a.b')).toBeUndefined();
    expect(get(undefined, 'a.b', 'default')).toBe('default');
  });
});

describe('pick', () => {
  const obj = {
    a: 1,
    b: '2',
    c: true,
    d: 'extra',
  };

  it('should pick specified properties from an object', () => {
    const picked = pick(obj, ['a', 'c']);
    expect(picked).toEqual({ a: 1, c: true });
  });

  it('should ignore keys that do not exist in the object', () => {
    const picked = pick(obj, ['a', 'e']);
    expect(picked).toEqual({ a: 1 });
  });

  it('should return an empty object if no keys are provided', () => {
    expect(pick(obj, [])).toEqual({});
  });

  it('should return an empty object if the input object is null or undefined', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });
});
