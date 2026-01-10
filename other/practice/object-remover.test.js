const { omit } = require('./object-remover.js');

describe('omit', () => {
  test('should omit specified properties from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  test('should return the original object if no keys are specified to omit', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, [])).toEqual({ a: 1, b: 2 });
  });

  test('should ignore keys to omit that do not exist in the object', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, ['a', 'c', 'd'])).toEqual({ b: 2 });
  });

  test('should return an empty object if all properties are omitted', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, ['a', 'b'])).toEqual({});
  });

  test('should return the same object if the input object is empty', () => {
    expect(omit({}, ['a', 'b'])).toEqual({});
  });

  test('should return a new object instance', () => {
    const obj = { a: 1, b: 2 };
    const omitted = omit(obj, ['a']);
    expect(omitted).not.toBe(obj);
  });

  test('should handle properties with undefined or null values', () => {
    const obj = { a: 1, b: undefined, c: null, d: 4 };
    expect(omit(obj, ['a', 'b'])).toEqual({ c: null, d: 4 });
  });

  test('should throw an error if the first argument is not an object', () => {
    expect(() => omit(null, ['a'])).toThrow('Expected an object for the first argument.');
    expect(() => omit(undefined, ['a'])).toThrow('Expected an object for the first argument.');
    expect(() => omit(123, ['a'])).toThrow('Expected an object for the first argument.');
    expect(() => omit('string', ['a'])).toThrow('Expected an object for the first argument.');
    expect(() => omit([], ['a'])).toThrow('Expected an object for the first argument.');
  });

  test('should throw an error if the second argument is not an array', () => {
    const obj = { a: 1 };
    expect(() => omit(obj, 'a')).toThrow('Expected an array of strings for the second argument.');
    expect(() => omit(obj, null)).toThrow('Expected an array of strings for the second argument.');
  });
});
