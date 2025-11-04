import { at } from './object-at-utils.js';

describe('at', () => {
  const object = {
    'a': [{ 'b': { 'c': 3 } }, 4],
    'd': { 'e': 5 }
  };

  test('should return an array of values for given paths', () => {
    expect(at(object, ['a[0].b.c', 'd.e'])).toEqual([3, 5]);
  });

  test('should return undefined for non-existent paths', () => {
    expect(at(object, ['a[0].b.x', 'd.f'])).toEqual([undefined, undefined]);
  });

  test('should handle a mix of existing and non-existent paths', () => {
    expect(at(object, ['a[1]', 'd.x'])).toEqual([4, undefined]);
  });

  test('should return an empty array for empty paths', () => {
    expect(at(object, [])).toEqual([]);
  });

  test('should return an empty array for null or undefined object', () => {
    expect(at(null, ['a'])).toEqual([]);
    expect(at(undefined, ['a'])).toEqual([]);
  });
});