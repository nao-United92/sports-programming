import { omit } from './object-omit-utils';

describe('omit', () => {
  test('should omit specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = omit(obj, ['b']);
    expect(result).toEqual({ a: 1, c: 3 });
    expect(result).not.toBe(obj); // Should return a new object
  });

  test('should omit multiple specified keys', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const result = omit(obj, ['b', 'd']);
    expect(result).toEqual({ a: 1, c: 3 });
  });

  test('should return the same object if no keys are specified to omit', () => {
    const obj = { a: 1, b: 2 };
    const result = omit(obj, []);
    expect(result).toEqual({ a: 1, b: 2 });
    expect(result).not.toBe(obj); // Still returns a new object
  });

  test('should handle keys that do not exist in the object', () => {
    const obj = { a: 1, b: 2 };
    const result = omit(obj, ['c', 'd']);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  test('should handle empty object', () => {
    const obj = {};
    const result = omit(obj, ['a']);
    expect(result).toEqual({});
  });

  test('should handle null or undefined object input', () => {
    expect(omit(null, ['a'])).toBeNull();
    expect(omit(undefined, ['a'])).toBeUndefined();
  });

  test('should handle non-object input', () => {
    expect(omit(123, ['a'])).toBe(123);
    expect(omit('string', ['a'])).toBe('string');
  });

  test('should handle object with inherited properties', () => {
    function Parent() { this.parentProp = 'parent'; }
    function Child() { this.childProp = 'child'; }
    Child.prototype = new Parent();
    const obj = new Child();
    obj.ownProp = 'own';

    const result = omit(obj, ['childProp']);
    expect(result).toEqual({ ownProp: 'own' });
    expect(Object.prototype.hasOwnProperty.call(result, 'childProp')).toBeFalsy();
  });
});
