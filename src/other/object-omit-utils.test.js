const omit = require('./object-omit-utils');

describe('omit', () => {
  const obj = { 'a': 1, 'b': '2', 'c': 3 };

  test('should return an empty object if the source object is null or undefined', () => {
    expect(omit(null, ['a', 'b'])).toEqual({});
    expect(omit(undefined, 'a')).toEqual({});
  });

  test('should create a new object omitting the specified properties', () => {
    const result = omit(obj, ['a', 'c']);
    expect(result).toEqual({ 'b': '2' });
  });

  test('should not modify the original object', () => {
    omit(obj, 'b');
    expect(obj).toEqual({ 'a': 1, 'b': '2', 'c': 3 });
  });

  test('should work with a single key provided as a string', () => {
    expect(omit(obj, 'b')).toEqual({ 'a': 1, 'c': 3 });
  });

  test('should ignore keys that do not exist in the source object', () => {
    expect(omit(obj, ['a', 'f'])).toEqual({ 'b': '2', 'c': 3 });
  });

  test('should return a copy of the object if no keys are provided', () => {
    const result = omit(obj, []);
    expect(result).toEqual(obj);
    expect(result).not.toBe(obj);
  });
  
  test('should return a copy of the object if no matching keys are found', () => {
    const result = omit(obj, ['x', 'y']);
    expect(result).toEqual(obj);
    expect(result).not.toBe(obj);
  });
});
