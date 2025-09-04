import omit from './omit-utils.js';

describe('omit', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };

  test('should create an object without the omitted properties', () => {
    expect(omit(object, ['a', 'c'])).toEqual({ 'b': '2' });
  });

  test('should ignore keys that are not in the object', () => {
    expect(omit(object, ['d', 'e'])).toEqual(object);
  });

  test('should return an equivalent object if keys array is empty', () => {
    expect(omit(object, [])).toEqual(object);
  });

  test('should not modify the original object', () => {
    const original = { ...object };
    omit(object, ['a']);
    expect(object).toEqual(original);
  });

  test('should return an empty object for null or undefined input', () => {
    expect(omit(null, ['a', 'c'])).toEqual({});
    expect(omit(undefined, ['a', 'c'])).toEqual({});
  });
});