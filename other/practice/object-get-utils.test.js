const { get } = require('./object-get-utils');

describe('get', () => {
  const obj = {
    a: {
      b: [
        { c: 1 },
        { d: 2 }
      ],
      'e.f': 3
    }
  };

  it('should get a value using a string path', () => {
    expect(get(obj, 'a.b[0].c')).toBe(1);
  });

  it('should get a value using an array path', () => {
    expect(get(obj, ['a', 'b', '1', 'd'])).toBe(2);
  });

  it('should handle keys with dots if specified in an array', () => {
    expect(get(obj, ['a', 'e.f'])).toBe(3);
  });

  it('should return a default value if path does not exist', () => {
    expect(get(obj, 'a.x.y', 'default')).toBe('default');
  });

  it('should return undefined if path does not exist and no default value is provided', () => {
    expect(get(obj, 'a.x.y')).toBeUndefined();
  });

  it('should return the object if the path is empty', () => {
    expect(get(obj, [], 'default')).toBe('default');
    expect(get(obj, '')).toBeUndefined();
  });
  
  it('should handle null or undefined objects gracefully', () => {
    expect(get(null, 'a.b', 'default')).toBe('default');
    expect(get(undefined, 'a.b')).toBeUndefined();
  });
});
