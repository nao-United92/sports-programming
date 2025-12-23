const getOrDefault = require('./object-get-or-default-utils');

describe('getOrDefault', () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: [3, 4]
    },
    e: null
  };

  it('should return the value if the path exists', () => {
    expect(getOrDefault(obj, 'a', 0)).toBe(1);
    expect(getOrDefault(obj, 'b.c', 0)).toBe(2);
    expect(getOrDefault(obj, 'b.d[1]', 0)).toBe(4);
  });

  it('should return the default value if the path does not exist', () => {
    expect(getOrDefault(obj, 'x', 0)).toBe(0);
    expect(getOrDefault(obj, 'b.f', 0)).toBe(0);
    expect(getOrDefault(obj, 'b.d[2]', 0)).toBe(0);
  });

  it('should return the default value if an intermediate path is null or undefined', () => {
    expect(getOrDefault(obj, 'e.f', 'default')).toBe('default');
    expect(getOrDefault(obj, 'g.h', 'default')).toBe('default');
  });

  it('should return the value if it is explicitly null or undefined', () => {
    expect(getOrDefault(obj, 'e', 'default')).toBe(null);
  });

  it('should handle non-object inputs for the main object', () => {
    expect(getOrDefault(null, 'a', 0)).toBe(0);
    expect(getOrDefault(undefined, 'a', 0)).toBe(0);
    expect(getOrDefault(123, 'a', 0)).toBe(0);
  });
});
