import { pick } from './object-pick-utils.js';

describe('pick', () => {
  test('should pick specified keys from an object', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
  });

  test('should not mutate the original object', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    pick(object, ['a', 'c']);
    expect(object).toEqual({ 'a': 1, 'b': '2', 'c': 3 });
  });

  test('should return an empty object if keys do not exist', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(object, ['d', 'e'])).toEqual({});
  });

  test('should return an empty object if the keys array is empty', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(object, [])).toEqual({});
  });

  test('should return an empty object for null or undefined input object', () => {
    expect(pick(null, ['a', 'b'])).toEqual({});
    expect(pick(undefined, ['a', 'b'])).toEqual({});
  });
});
