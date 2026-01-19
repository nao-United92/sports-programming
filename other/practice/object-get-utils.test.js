const { get } = require('./object-get-utils');

describe('get', () => {
  const obj = { a: { b: { c: 1, d: [2, 3] } } };

  it('should get a nested property using a string path', () => {
    expect(get(obj, 'a.b.c')).toBe(1);
  });

  it('should get a nested property using an array path', () => {
    expect(get(obj, ['a', 'b', 'c'])).toBe(1);
  });

  it('should get a nested array element', () => {
    expect(get(obj, 'a.b.d.1')).toBe(3);
  });

  it('should return a default value for a non-existent path', () => {
    expect(get(obj, 'a.x.y', 'default')).toBe('default');
  });

  it('should return undefined for a non-existent path without a default value', () => {
    expect(get(obj, 'a.x.y')).toBeUndefined();
  });

  it('should handle null or undefined objects gracefully', () => {
    expect(get(null, 'a.b.c', 'default')).toBe('default');
    expect(get(undefined, 'a.b.c')).toBeUndefined();
  });
});
