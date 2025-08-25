import { pick } from './object-pick-utils.js';

describe('pick', () => {
  test('should create an object with picked properties', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
  });

  test('should return an empty object if the source object is null or undefined', () => {
    expect(pick(null, ['a', 'c'])).toEqual({});
    expect(pick(undefined, ['a', 'c'])).toEqual({});
  });

  test('should handle keys that are not in the source object', () => {
    const object = { 'a': 1, 'b': '2' };
    expect(pick(object, ['a', 'd'])).toEqual({ 'a': 1 });
  });

  test('should return an empty object if no keys are provided', () => {
    const object = { 'a': 1, 'b': '2' };
    expect(pick(object, [])).toEqual({});
  });
});
