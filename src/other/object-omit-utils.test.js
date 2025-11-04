
import { omit } from './object-omit-utils.js';

describe('omit', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };

  test('should omit specified properties', () => {
    expect(omit(object, ['a', 'c'])).toEqual({ 'b': '2' });
  });

  test('should work with a single property path', () => {
    expect(omit(object, 'a')).toEqual({ 'b': '2', 'c': 3 });
  });

  test('should return a new object if no properties are omitted', () => {
    const result = omit(object, ['d', 'e']);
    expect(result).toEqual(object);
    expect(result).not.toBe(object);
  });

  test('should return an empty object if the source object is null or undefined', () => {
    expect(omit(null, ['a', 'b'])).toEqual({});
    expect(omit(undefined, 'a')).toEqual({});
  });
});
