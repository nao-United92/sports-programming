const { get } = require('./object-get-utils');

describe('get', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }, { d: 4 }] };

  it('should get a value using a dot-notation string path', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  it('should get a value using a bracket-notation string path', () => {
    expect(get(object, "a[1]['d']")).toBe(4);
  });

  it('should get a value using an array path', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  it('should return undefined for a non-existent path', () => {
    expect(get(object, 'a[0].b.d')).toBe(undefined);
  });

  it('should return the default value for a non-existent path', () => {
    expect(get(object, 'a[0].b.d', 'default')).toBe('default');
  });

  it('should return undefined if the object is null or undefined', () => {
    expect(get(null, 'a.b')).toBe(undefined);
    expect(get(undefined, ['a', 'b'])).toBe(undefined);
  });

  it('should return the default value if the object is null or undefined', () => {
    expect(get(null, 'a.b', 'default')).toBe('default');
  });

  it('should handle paths with existing but undefined values', () => {
    const objWithUndefined = { a: { b: undefined } };
    expect(get(objWithUndefined, 'a.b')).toBe(undefined);
    expect(get(objWithUndefined, 'a.b', 'default')).toBe('default');
  });

  it('should handle paths that are partially valid', () => {
    expect(get(object, 'a[2].b.c')).toBe(undefined);
    expect(get(object, 'a[2].b.c', 'default')).toBe('default');
  });
});