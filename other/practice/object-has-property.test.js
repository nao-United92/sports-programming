// other/practice/object-has-property.test.js
const objectHasProperty = require('./object-has-property');

describe('objectHasProperty', () => {
  test('should return true for an own property', () => {
    const obj = { a: 1, b: undefined };
    expect(objectHasProperty(obj, 'a')).toBe(true);
    expect(objectHasProperty(obj, 'b')).toBe(true); // even if value is undefined
  });

  test('should return true for an inherited property', () => {
    const proto = { a: 1 };
    const obj = Object.create(proto);
    expect(objectHasProperty(obj, 'a')).toBe(true);
  });

  test('should return false for a non-existent property', () => {
    const obj = { a: 1 };
    expect(objectHasProperty(obj, 'b')).toBe(false);
  });

  test('should return false for null or undefined object', () => {
    expect(objectHasProperty(null, 'a')).toBe(false);
    expect(objectHasProperty(undefined, 'a')).toBe(false);
  });

  test('should work with primitive types that have properties (e.g., strings)', () => {
    expect(objectHasProperty('hello', 'length')).toBe(true);
    expect(objectHasProperty('hello', 'charAt')).toBe(true);
  });

  test('should work with arrays', () => {
    const arr = [1, 2, 3];
    expect(objectHasProperty(arr, '0')).toBe(true);
    expect(objectHasProperty(arr, 'length')).toBe(true);
    expect(objectHasProperty(arr, 'push')).toBe(true); // inherited
    expect(objectHasProperty(arr, '4')).toBe(false);
  });

  test('should handle symbol as key', () => {
    const sym = Symbol('test');
    const obj = { [sym]: 1 };
    expect(objectHasProperty(obj, sym)).toBe(true);

    const sym2 = Symbol('test2');
    expect(objectHasProperty(obj, sym2)).toBe(false);
  });
});
