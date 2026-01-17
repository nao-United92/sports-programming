import { omit } from './object-property-omitter.js';

describe('omit', () => {
  const obj = { a: 1, b: 'hello', c: true };

  test('should omit specified properties from an object', () => {
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 'hello' });
  });

  test('should not change the original object', () => {
    omit(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: 'hello', c: true });
  });

  test('should ignore keys that are not in the object', () => {
    expect(omit(obj, ['d', 'e'])).toEqual(obj);
  });

  test('should return the original object if no keys are provided', () => {
    expect(omit(obj, [])).toEqual(obj);
  });

  test('should return an empty object if the input is not an object', () => {
    expect(omit(null, ['a'])).toEqual({});
  });

  test('should return a copy of the original object if keys is not an array', () => {
    const newObj = omit(obj, 'a');
    expect(newObj).toEqual(obj);
    expect(newObj).not.toBe(obj);
  });
});