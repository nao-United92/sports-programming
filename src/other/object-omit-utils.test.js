import { omit } from './object-omit-utils.js';

describe('omit', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };

  it('should create an object with omitted properties', () => {
    expect(omit(object, ['a', 'c'])).toEqual({ 'b': '2' });
  });

  it('should not mutate the original object', () => {
    omit(object, ['a']);
    expect(object).toEqual({ 'a': 1, 'b': '2', 'c': 3 });
  });

  it('should ignore keys that do not exist in the source object', () => {
    expect(omit(object, ['d', 'e'])).toEqual(object);
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(omit(null, ['a', 'b'])).toEqual({});
    expect(omit(undefined, ['a', 'b'])).toEqual({});
  });

  it('should return a shallow copy of the object if no keys are provided', () => {
    const result = omit(object, []);
    expect(result).toEqual(object);
    expect(result).not.toBe(object);
  });

  it('should handle an empty source object', () => {
    expect(omit({}, ['a'])).toEqual({});
  });
});