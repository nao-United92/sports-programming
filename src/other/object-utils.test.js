import { pick, omit } from './object-utils.js';

describe('Object Utils', () => {
  describe('pick', () => {
    it('should create an object with picked properties', () => {
      const object = { a: 1, b: '2', c: 3 };
      expect(pick(object, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    it('should return an empty object if no keys are picked', () => {
      const object = { a: 1, b: '2', c: 3 };
      expect(pick(object, [])).toEqual({});
    });

    it('should handle non-existent keys gracefully', () => {
      const object = { a: 1, b: '2' };
      expect(pick(object, ['a', 'd'])).toEqual({ a: 1 });
    });

    it('should return an empty object if the source object is null or undefined', () => {
      expect(pick(null, ['a', 'b'])).toEqual({});
      expect(pick(undefined, ['a', 'b'])).toEqual({});
    });
  });

  describe('omit', () => {
    it('should create an object without omitted properties', () => {
      const object = { a: 1, b: '2', c: 3 };
      expect(omit(object, ['a', 'c'])).toEqual({ b: '2' });
    });

    it('should return the original object if no keys are omitted', () => {
      const object = { a: 1, b: '2', c: 3 };
      expect(omit(object, [])).toEqual({ a: 1, b: '2', c: 3 });
    });

    it('should handle non-existent keys gracefully', () => {
      const object = { a: 1, b: '2' };
      expect(omit(object, ['c', 'd'])).toEqual({ a: 1, b: '2' });
    });
  });
});