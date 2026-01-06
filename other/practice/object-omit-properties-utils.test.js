const omit = require('./object-omit-properties-utils');

describe('omit', () => {
  const originalObj = {
    a: 1,
    b: 2,
    c: 3,
    d: {
      e: 4
    }
  };

  test('should omit a single property', () => {
    const result = omit(originalObj, ['a']);
    expect(result).toEqual({
      b: 2,
      c: 3,
      d: {
        e: 4
      }
    });
    expect(result).not.toBe(originalObj); // Should return a new object
  });

  test('should omit multiple properties', () => {
    const result = omit(originalObj, ['a', 'c']);
    expect(result).toEqual({
      b: 2,
      d: {
        e: 4
      }
    });
  });

  test('should not modify the original object', () => {
    const objCopy = { ...originalObj
    }; // Shallow copy for comparison
    omit(originalObj, ['a']);
    expect(originalObj).toEqual(objCopy);
  });

  test('should handle properties that do not exist in the object', () => {
    const result = omit(originalObj, ['a', 'x']);
    expect(result).toEqual({
      b: 2,
      c: 3,
      d: {
        e: 4
      }
    });
  });

  test('should return an empty object if all properties are omitted', () => {
    const result = omit(originalObj, ['a', 'b', 'c', 'd']);
    expect(result).toEqual({});
  });

  test('should return a shallow copy if no properties are omitted', () => {
    const result = omit(originalObj, []);
    expect(result).toEqual(originalObj);
    expect(result).not.toBe(originalObj);
  });

  test('should handle empty input object', () => {
    expect(omit({}, ['a'])).toEqual({});
  });

  test('should handle non-plain object input gracefully', () => {
    const arr = [1, 2, 3];
    expect(omit(arr, ['0'])).toBe(arr); // Arrays are not plain objects, return original
    const date = new Date();
    expect(omit(date, ['getTime'])).toBe(date); // Date objects are not plain, return original
    expect(omit(null, ['a'])).toBeNull();
    expect(omit(undefined, ['a'])).toBeUndefined();
    expect(omit(123, ['a'])).toBe(123);
  });

  test('should throw an error if propertiesToOmit is not an array', () => {
    expect(() => omit(originalObj, 'a')).toThrow('propertiesToOmit must be an array of strings.');
    expect(() => omit(originalObj, null)).toThrow('propertiesToOmit must be an array of strings.');
    expect(() => omit(originalObj, undefined)).toThrow('propertiesToOmit must be an array of strings.');
  });
});