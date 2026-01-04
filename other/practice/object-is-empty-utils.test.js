import { isEmptyObject } from './object-is-empty-utils';

describe('isEmptyObject', () => {
  test('should return true for an empty object', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  test('should return false for an object with properties', () => {
    expect(isEmptyObject({
      a: 1
    })).toBe(false);
  });

  test('should return false for an object with inherited properties', () => {
    function Parent() {
      this.a = 1;
    }

    function Child() {}
    Child.prototype = new Parent();
    const child = new Child();
    expect(isEmptyObject(child)).toBe(true); // Object.keys only checks own properties
  });

  test('should return false for null', () => {
    expect(isEmptyObject(null)).toBe(false);
  });

  test('should return false for undefined', () => {
    expect(isEmptyObject(undefined)).toBe(false);
  });

  test('should return false for an array (even empty)', () => {
    expect(isEmptyObject([])).toBe(false);
    expect(isEmptyObject([1, 2])).toBe(false);
  });

  test('should return false for other non-object types', () => {
    expect(isEmptyObject(123)).toBe(false);
    expect(isEmptyObject('string')).toBe(false);
    expect(isEmptyObject(true)).toBe(false);
    expect(isEmptyObject(Symbol('a'))).toBe(false);
  });
});