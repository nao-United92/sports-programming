import { has } from './object-has-utils.js';

describe('has', () => {
  const object = { a: { b: 2 } };

  test('should return true for a valid path', () => {
    expect(has(object, 'a.b')).toBe(true);
  });

  test('should return false for an invalid path', () => {
    expect(has(object, 'a.c')).toBe(false);
  });

  test('should return false if an intermediate path is null or undefined', () => {
    const objWithNull = { a: { b: null } };
    expect(has(objWithNull, 'a.b.c')).toBe(false);
  });

  test('should return false for a path on the prototype chain', () => {
    function Parent() {}
    Parent.prototype.a = { b: 2 };
    const child = new Parent();
    expect(has(child, 'a')).toBe(false);
  });

  test('should return false for a null or undefined object', () => {
    expect(has(null, 'a')).toBe(false);
    expect(has(undefined, 'a')).toBe(false);
  });

  test('should work with array paths', () => {
    expect(has(object, ['a', 'b'])).toBe(true);
    expect(has(object, ['a', 'c'])).toBe(false);
  });
});
