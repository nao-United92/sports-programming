const { pick, omit } = require('./object-pick-omit');

describe('Object Utilities', () => {
  const sourceObj = { a: 1, b: 2, c: 3, d: null };

  describe('pick', () => {
    it('should pick specified keys from an object', () => {
      const result = pick(sourceObj, ['a', 'c']);
      expect(result).toEqual({ a: 1, c: 3 });
    });

    it('should ignore keys that do not exist in the source object', () => {
      const result = pick(sourceObj, ['a', 'e']);
      expect(result).toEqual({ a: 1 });
    });

    it('should return an empty object if the source is null or undefined', () => {
      expect(pick(null, ['a'])).toEqual({});
      expect(pick(undefined, ['a'])).toEqual({});
    });

    it('should return a new object instance', () => {
      const result = pick(sourceObj, ['a']);
      expect(result).not.toBe(sourceObj);
    });

    it('should include properties with null values if picked', () => {
        const result = pick(sourceObj, ['d']);
        expect(result).toEqual({ d: null });
    });
  });

  describe('omit', () => {
    it('should omit specified keys from an object', () => {
      const result = omit(sourceObj, ['b', 'd']);
      expect(result).toEqual({ a: 1, c: 3 });
    });

    it('should not change the object if omitted keys do not exist', () => {
      const result = omit(sourceObj, ['e', 'f']);
      expect(result).toEqual(sourceObj);
    });

    it('should return an empty object if the source is null or undefined', () => {
      expect(omit(null, ['a'])).toEqual({});
      expect(omit(undefined, ['a'])).toEqual({});
    });

    it('should return a new object instance', () => {
      const result = omit(sourceObj, ['e']);
      expect(result).not.toBe(sourceObj);
    });
  });
});
