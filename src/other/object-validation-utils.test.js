const { isObject, hasKeys } = require('./object-validation-utils');

describe('Object Validation Utilities', () => {
  describe('isObject', () => {
    test('should return true for plain objects', () => {
      expect(isObject({})).toBe(true);
      expect(isObject({ a: 1 })).toBe(true);
      expect(isObject(new Object())).toBe(true);
    });

    test('should return false for arrays', () => {
      expect(isObject([])).toBe(false);
      expect(isObject([1, 2])).toBe(false);
    });

    test('should return false for null', () => {
      expect(isObject(null)).toBe(false);
    });

    test('should return false for functions', () => {
      expect(isObject(() => {})).toBe(false);
      expect(isObject(function() {})).toBe(false);
    });

    test('should return false for primitive values', () => {
      expect(isObject(undefined)).toBe(false);
      expect(isObject('string')).toBe(false);
      expect(isObject(123)).toBe(false);
      expect(isObject(true)).toBe(false);
      expect(isObject(Symbol('a'))).toBe(false);
    });

    test('should return false for class instances', () => {
        class MyClass {}
        expect(isObject(new MyClass())).toBe(false);
    });
  });

  describe('hasKeys', () => {
    const testObj = { a: 1, b: 'test', c: true };

    test('should return true if object has all specified keys', () => {
      expect(hasKeys(testObj, ['a'])).toBe(true);
      expect(hasKeys(testObj, ['a', 'c'])).toBe(true);
      expect(hasKeys(testObj, ['a', 'b', 'c'])).toBe(true);
    });

    test('should return false if object is missing some keys', () => {
      expect(hasKeys(testObj, ['a', 'd'])).toBe(false);
      expect(hasKeys(testObj, ['d', 'e'])).toBe(false);
    });
    
    test('should return true if keys array is empty or not provided', () => {
      expect(hasKeys(testObj, [])).toBe(true);
      expect(hasKeys(testObj)).toBe(true);
    });

    test('should return false if target is not a plain object', () => {
      expect(hasKeys([], ['length'])).toBe(false);
      expect(hasKeys(null, ['a'])).toBe(false);
      expect(hasKeys('string', ['length'])).toBe(false);
    });
    
    test('should not check inherited properties', () => {
      const parent = { inherited: true };
      const child = Object.create(parent);
      child.own = true;
      expect(hasKeys(child, ['own'])).toBe(true);
      expect(hasKeys(child, ['inherited'])).toBe(false);
    });
  });
});
