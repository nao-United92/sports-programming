const { deepClone, isEmpty, getValueByPath } = require('./object-enhancements.js');

describe('Object Enhancements', () => {
  describe('deepClone', () => {
    test('should clone a simple object', () => {
      const obj = { a: 1, b: 'hello' };
      const cloned = deepClone(obj);
      expect(cloned).toEqual(obj);
      expect(cloned).not.toBe(obj);
    });

    test('should clone a nested object', () => {
      const obj = { a: { b: { c: 42 } }, d: [1, 2] };
      const cloned = deepClone(obj);
      expect(cloned).toEqual(obj);
      expect(cloned.a.b).not.toBe(obj.a.b);
      expect(cloned.d).not.toBe(obj.d);
    });

    test('should clone an array of objects', () => {
        const arr = [{ a: 1 }, { b: 2 }];
        const cloned = deepClone(arr);
        expect(cloned).toEqual(arr);
        expect(cloned[0]).not.toBe(arr[0]);
    });

    test('should handle null and primitive values', () => {
      expect(deepClone(null)).toBeNull();
      expect(deepClone(42)).toBe(42);
      expect(deepClone('string')).toBe('string');
    });

    test('should handle Dates', () => {
        const date = new Date();
        const clonedDate = deepClone(date);
        expect(clonedDate.getTime()).toEqual(date.getTime());
        expect(clonedDate).not.toBe(date);
    });
  });

  describe('isEmpty', () => {
    test('should return true for an empty object', () => {
      expect(isEmpty({})).toBe(true);
    });

    test('should return false for a non-empty object', () => {
      expect(isEmpty({ a: 1 })).toBe(false);
    });

    test('should return true for null or undefined', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });

    test('should return false for non-plain objects', () => {
        function MyObject() {}
        expect(isEmpty(new MyObject())).toBe(false);
        expect(isEmpty([])).toBe(false);
    });
  });

  describe('getValueByPath', () => {
    const obj = {
      a: {
        b: {
          c: 'found it'
        },
        d: [
          { e: 1 },
          { f: 2 }
        ]
      },
      g: null
    };

    test('should retrieve a nested value', () => {
      expect(getValueByPath(obj, 'a.b.c')).toBe('found it');
    });

    test('should work with array indices in path', () => {
        expect(getValueByPath(obj, 'a.d.0.e')).toBe(1);
    });

    test('should return undefined for a non-existent path', () => {
      expect(getValueByPath(obj, 'a.x.y')).toBeUndefined();
    });

    test('should return undefined when path goes through null or undefined', () => {
        expect(getValueByPath(obj, 'g.h')).toBeUndefined();
    });

    test('should return the object itself for an empty path', () => {
        // This is a tricky case. The current implementation returns undefined.
        // Let's test the current behavior. A more robust implementation might handle this differently.
        expect(getValueByPath(obj, '')).toBe(obj); // split('') -> [''], reduce -> obj[''] -> undefined
    });
  });
});
