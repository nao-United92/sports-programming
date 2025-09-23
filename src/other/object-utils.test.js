import { invert, has } from './object-utils.js';

describe('Object Utilities', () => {
  describe('invert', () => {
    test('should invert an object with unique values', () => {
      const obj = { a: '1', b: '2', c: '3' };
      const invertedObj = { '1': 'a', '2': 'b', '3': 'c' };
      expect(invert(obj)).toEqual(invertedObj);
    });

    test('should handle objects with non-unique values (last one wins)', () => {
      const obj = { a: '1', b: '2', c: '1' };
      const invertedObj = { '1': 'c', '2': 'b' };
      expect(invert(obj)).toEqual(invertedObj);
    });

    test('should return an empty object for an empty object', () => {
      expect(invert({})).toEqual({});
    });
  });

  describe('has', () => {
    const obj = { a: 1, b: undefined };
    function Parent() {
      this.c = 3;
    }
    Parent.prototype.d = 4;
    const child = new Parent();
    child.e = 5;


    test('should return true for own properties', () => {
      expect(has(obj, 'a')).toBe(true);
    });

    test('should return true for own properties with undefined value', () => {
      expect(has(obj, 'b')).toBe(true);
    });

    test('should return false for properties that do not exist', () => {
      expect(has(obj, 'c')).toBe(false);
    });

    test('should return true for own properties on child objects', () => {
        expect(has(child, 'c')).toBe(true);
        expect(has(child, 'e')).toBe(true);
    });

    test('should return false for inherited properties', () => {
      expect(has(child, 'd')).toBe(false);
    });
  });
});
