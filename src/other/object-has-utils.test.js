import { has } from './object-has-utils';

describe('has', () => {
  const object = { 'a': { 'b': 2 }, 'c': null, 'd': undefined };

  it('should return true if a direct property exists', () => {
    expect(has(object, 'a')).toBe(true);
  });

  it('should return true if a nested property exists', () => {
    expect(has(object, 'a.b')).toBe(true);
  });

  it('should return false if a property does not exist', () => {
    expect(has(object, 'a.c')).toBe(false);
    expect(has(object, 'x.y')).toBe(false);
  });

  it('should return false if object is null or undefined', () => {
    expect(has(null, 'a')).toBe(false);
    expect(has(undefined, 'a')).toBe(false);
  });

  it('should return true for null values', () => {
    expect(has(object, 'c')).toBe(true);
  });

  it('should return true for undefined values', () => {
    expect(has(object, 'd')).toBe(true);
  });

  it('should handle array paths', () => {
    const arrObject = { 'a': [{ 'b': 1 }] };
    expect(has(arrObject, ['a', '0', 'b'])).toBe(true);
    expect(has(arrObject, ['a', '1', 'b'])).toBe(false);
  });

  it('should handle paths with array notation in string', () => {
    const arrObject = { 'a': [{ 'b': 1 }] };
    expect(has(arrObject, 'a[0].b')).toBe(true);
    expect(has(arrObject, 'a[1].b')).toBe(false);
  });

  it('should handle empty path', () => {
    expect(has(object, '')).toBe(true);
    expect(has(object, [])).toBe(true);
  });
});
