import pick from './pick-utils.js';

describe('pick', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };

  test('should create an object with picked properties', () => {
    expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
  });

  test('should ignore keys that are not in the object', () => {
    expect(pick(object, ['a', 'd'])).toEqual({ 'a': 1 });
  });

  test('should return an empty object if keys array is empty', () => {
    expect(pick(object, [])).toEqual({});
  });

  test('should not modify the original object', () => {
    const original = { ...object };
    pick(object, ['a', 'c']);
    expect(object).toEqual(original);
  });

  test('should return an empty object for null or undefined input', () => {
    expect(pick(null, ['a', 'c'])).toEqual({});
    expect(pick(undefined, ['a', 'c'])).toEqual({});
  });

  test('should work with properties that have falsy values', () => {
    const objWithFalsy = { 'a': 0, 'b': false, 'c': null, 'd': '' };
    expect(pick(objWithFalsy, ['a', 'b', 'c', 'd'])).toEqual(objWithFalsy);
  });
});
