const { deepClone, isEmpty } = require('./object-enhancements');

describe('Object Enhancements', () => {
  describe('deepClone', () => {
    it('should deep clone a nested object', () => {
      const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
      const clonedObj = deepClone(obj);
      expect(clonedObj).toEqual(obj);
      expect(clonedObj).not.toBe(obj);
      expect(clonedObj.b).not.toBe(obj.b);
      expect(clonedObj.b.d).not.toBe(obj.b.d);
    });

    it('should deep clone an array with objects', () => {
      const arr = [{ a: 1 }, { b: 2 }];
      const clonedArr = deepClone(arr);
      expect(clonedArr).toEqual(arr);
      expect(clonedArr).not.toBe(arr);
      expect(clonedArr[0]).not.toBe(arr[0]);
    });

    it('should handle primitive values', () => {
      expect(deepClone(42)).toBe(42);
      expect(deepClone('hello')).toBe('hello');
      expect(deepClone(null)).toBe(null);
      expect(deepClone(undefined)).toBe(undefined);
    });

    it('should handle dates', () => {
        const date = new Date();
        const clonedDate = deepClone(date);
        expect(clonedDate.getTime()).toBe(date.getTime());
        expect(clonedDate).not.toBe(date);
    });
  });

  describe('isEmpty', () => {
    it('should return true for an empty object', () => {
      expect(isEmpty({})).toBe(true);
    });

    it('should return false for a non-empty object', () => {
      expect(isEmpty({ a: 1 })).toBe(false);
    });

    it('should return true for null or undefined', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });

    it('should return false for an array', () => {
      expect(isEmpty([])).toBe(false);
    });
  });
});