const { pick } = require('./object-picker.js');

describe('pick', () => {
  test('should pick specified properties from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('should return an empty object if no keys are specified', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, [])).toEqual({});
  });

  test('should ignore keys that do not exist in the object', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, ['a', 'c', 'd'])).toEqual({ a: 1 });
  });

  test('should return an empty object if the input object is empty', () => {
    expect(pick({}, ['a', 'b'])).toEqual({});
  });

  test('should return a new object instance', () => {
    const obj = { a: 1, b: 2 };
    const picked = pick(obj, ['a']);
    expect(picked).not.toBe(obj);
  });

  test('should handle properties with undefined or null values', () => {
    const obj = { a: 1, b: undefined, c: null };
    expect(pick(obj, ['a', 'b', 'c'])).toEqual({ a: 1, b: undefined, c: null });
  });

  test('should throw an error if the first argument is not an object', () => {
    expect(() => pick(null, ['a'])).toThrow('Expected an object for the first argument.');
    expect(() => pick(undefined, ['a'])).toThrow('Expected an object for the first argument.');
    expect(() => pick(123, ['a'])).toThrow('Expected an object for the first argument.');
    expect(() => pick('string', ['a'])).toThrow('Expected an object for the first argument.');
    expect(() => pick([], ['a'])).toThrow('Expected an object for the first argument.');
  });

  test('should throw an error if the second argument is not an array', () => {
    const obj = { a: 1 };
    expect(() => pick(obj, 'a')).toThrow('Expected an array of strings for the second argument.');
    expect(() => pick(obj, null)).toThrow('Expected an array of strings for the second argument.');
  });
});
