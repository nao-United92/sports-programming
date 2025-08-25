const { get } = require('./object-get-utils.js');

describe('object-get-utils', () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: [3, { e: 4 }],
    },
    f: null,
    g: undefined,
  };

  it('should get a top-level property', () => {
    expect(get(obj, 'a')).toBe(1);
  });

  it('should get a nested property', () => {
    expect(get(obj, 'b.c')).toBe(2);
  });

  it('should get a property from an array element', () => {
    expect(get(obj, 'b.d.1.e')).toBe(4);
  });

  it('should return undefined for a non-existent top-level property', () => {
    expect(get(obj, 'z')).toBeUndefined();
  });

  it('should return undefined for a non-existent nested property', () => {
    expect(get(obj, 'b.x.y')).toBeUndefined();
  });

  it('should return the default value for a non-existent property', () => {
    expect(get(obj, 'z', 'default')).toBe('default');
    expect(get(obj, 'b.x.y', 'default')).toBe('default');
  });

  it('should return null for a null property', () => {
    expect(get(obj, 'f')).toBeNull();
  });

  it('should return undefined for an undefined property', () => {
    expect(get(obj, 'g')).toBeUndefined();
  });

  it('should return the default value for an undefined property', () => {
    expect(get(obj, 'g', 'default')).toBe('default');
  });

  it('should handle null or undefined object gracefully', () => {
    expect(get(null, 'a')).toBeUndefined();
    expect(get(undefined, 'a')).toBeUndefined();
    expect(get(null, 'a', 'default')).toBe('default');
  });

  it('should handle non-object input gracefully', () => {
    expect(get(123, 'a')).toBeUndefined();
    expect(get('string', 'a')).toBeUndefined();
    expect(get(true, 'a')).toBeUndefined();
  });

  it('should handle array path', () => {
    expect(get(obj, ['b', 'c'])).toBe(2);
    expect(get(obj, ['b', 'd', 1, 'e'])).toBe(4);
  });

  it('should handle path with bracket notation', () => {
    const objWithBrackets = { 'prop-with-hyphen': { 'another[prop]': 10 } };
    expect(get(objWithBrackets, 'prop-with-hyphen.another[prop]')).toBe(10);
  });
});
