import { pick, omit } from './object-utils.js';

describe('Object Utilities', () => {
  const data = { a: 1, b: 2, c: 3 };

  describe('pick', () => {
    it('should return an object with only the specified keys', () => {
      expect(pick(data, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    it('should return an empty object if no keys are specified', () => {
      expect(pick(data, [])).toEqual({});
    });

    it('should ignore keys that do not exist in the source object', () => {
      expect(pick(data, ['a', 'd'])).toEqual({ a: 1 });
    });
  });

  describe('omit', () => {
    it('should return an object without the specified keys', () => {
      expect(omit(data, ['a', 'c'])).toEqual({ b: 2 });
    });

    it('should return the original object if no keys are specified', () => {
      expect(omit(data, [])).toEqual(data);
    });

    it('should not modify the original object', () => {
      omit(data, ['a']);
      expect(data).toEqual({ a: 1, b: 2, c: 3 });
    });
  });
});
