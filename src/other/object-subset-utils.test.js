const { pick, omit } = require('./object-subset-utils');

describe('Object Subset Utilities', () => {
  const sourceObj = { a: 1, b: 2, c: 3, d: 4 };

  describe('pick', () => {
    it('should pick a subset of properties', () => {
      expect(pick(sourceObj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    it('should ignore keys that do not exist', () => {
      expect(pick(sourceObj, ['a', 'e'])).toEqual({ a: 1 });
    });

    it('should return an empty object if no keys are provided', () => {
      expect(pick(sourceObj, [])).toEqual({});
    });

    it('should return an empty object from an empty source', () => {
      expect(pick({}, ['a'])).toEqual({});
    });
  });

  describe('omit', () => {
    it('should omit a subset of properties', () => {
      expect(omit(sourceObj, ['b', 'd'])).toEqual({ a: 1, c: 3 });
    });

    it('should ignore keys that do not exist', () => {
      expect(omit(sourceObj, ['b', 'e'])).toEqual({ a: 1, c: 3, d: 4 });
    });

    it('should return a shallow copy if no keys are provided', () => {
      const result = omit(sourceObj, []);
      expect(result).toEqual(sourceObj);
      expect(result).not.toBe(sourceObj);
    });

    it('should return an empty object from an empty source', () => {
      expect(omit({}, ['a'])).toEqual({});
    });
  });
});