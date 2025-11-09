const { pick, omit } = require('./object-subset-utils');

describe('Object Subset Utilities', () => {
  const originalObj = { a: 1, b: 'two', c: true, d: { nested: 4 } };

  describe('pick', () => {
    test('should return a new object with only the specified keys', () => {
      const picked = pick(originalObj, ['a', 'c']);
      expect(picked).toEqual({ a: 1, c: true });
    });

    test('should not mutate the original object', () => {
      const originalCopy = { ...originalObj };
      pick(originalObj, ['a', 'b']);
      expect(originalObj).toEqual(originalCopy);
    });

    test('should ignore keys that do not exist in the source object', () => {
      const picked = pick(originalObj, ['a', 'e']);
      expect(picked).toEqual({ a: 1 });
    });

    test('should return an empty object if no keys are provided', () => {
      const picked = pick(originalObj, []);
      expect(picked).toEqual({});
    });

    test('should return an empty object if the source object is null or undefined', () => {
      expect(pick(null, ['a'])).toEqual({});
      expect(pick(undefined, ['a'])).toEqual({});
    });
  });

  describe('omit', () => {
    test('should return a new object without the specified keys', () => {
      const omitted = omit(originalObj, ['b', 'd']);
      expect(omitted).toEqual({ a: 1, c: true });
    });

    test('should not mutate the original object', () => {
      const originalCopy = { ...originalObj };
      omit(originalObj, ['a', 'c']);
      expect(originalObj).toEqual(originalCopy);
    });

    test('should return a copy of the object if keys to omit do not exist', () => {
      const omitted = omit(originalObj, ['e', 'f']);
      expect(omitted).toEqual(originalObj);
      expect(omitted).not.toBe(originalObj); // Ensure it's a copy
    });

    test('should return an empty object if all keys are omitted', () => {
      const omitted = omit(originalObj, ['a', 'b', 'c', 'd']);
      expect(omitted).toEqual({});
    });

    test('should return an empty object if the source object is null or undefined', () => {
      expect(omit(null, ['a'])).toEqual({});
      expect(omit(undefined, ['a'])).toEqual({});
    });
  });
});
