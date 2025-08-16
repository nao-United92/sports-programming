import { pick, omit } from './object-utils';

describe('Object Utilities', () => {
  const data = { a: 1, b: 2, c: 3 };

  describe('pick', () => {
    it('should pick specified keys from an object', () => {
      expect(pick(data, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    it('should return an empty object if no keys are picked', () => {
      expect(pick(data, [])).toEqual({});
    });

    it('should handle non-existent keys gracefully', () => {
      expect(pick(data, ['a', 'd'])).toEqual({ a: 1 });
    });
  });

  describe('omit', () => {
    it('should omit specified keys from an object', () => {
      expect(omit(data, ['a', 'c'])).toEqual({ b: 2 });
    });

    it('should return the original object if no keys are omitted', () => {
      expect(omit(data, [])).toEqual(data);
    });

    it('should handle non-existent keys gracefully', () => {
      expect(omit(data, ['d', 'e'])).toEqual(data);
    });
  });
});