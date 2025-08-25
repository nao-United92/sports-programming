import { omit } from './object-omit-utils.js';

describe('omit', () => {
  test('should create an object with omitted properties', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omit(object, ['a', 'c'])).toEqual({ 'b': '2' });
  });

  test('should return an empty object if the source object is null or undefined', () => {
    expect(omit(null, ['a', 'c'])).toEqual({});
    expect(omit(undefined, ['a', 'c'])).toEqual({});
  });

  test('should handle keys that are not in the source object', () => {
    const object = { 'a': 1, 'b': '2' };
    expect(omit(object, ['d'])).toEqual({ 'a': 1, 'b': '2' });
  });

  test('should return the original object if no keys are provided', () => {
    const object = { 'a': 1, 'b': '2' };
    expect(omit(object, [])).toEqual({ 'a': 1, 'b': '2' });
  });
});