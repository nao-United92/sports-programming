import { has } from './object-has-utils';

describe('has', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }], 'd': undefined, 'e': null };

  it('should return true for existing direct properties', () => {
    expect(has(object, 'd')).toBe(true);
    expect(has(object, 'e')).toBe(true);
  });

  it('should return true for existing nested properties', () => {
    expect(has(object, 'a[0].b.c')).toBe(true);
    expect(has(object, ['a', '0', 'b', 'c'])).toBe(true);
  });

  it('should return false for non-existing direct properties', () => {
    expect(has(object, 'f')).toBe(false);
  });

  it('should return false for non-existing nested properties', () => {
    expect(has(object, 'a[0].b.x')).toBe(false);
    expect(has(object, 'a[1].b.c')).toBe(false);
  });

  it('should return false for null or undefined objects', () => {
    expect(has(null, 'a.b')).toBe(false);
    expect(has(undefined, 'a.b')).toBe(false);
  });

  it('should return false if an intermediate path is null or undefined', () => {
    const obj = { a: null };
    expect(has(obj, 'a.b')).toBe(false);
    const obj2 = { a: undefined };
    expect(has(obj2, 'a.b')).toBe(false);
  });

  it('should handle properties with undefined values', () => {
    expect(has(object, 'd')).toBe(true);
  });
});