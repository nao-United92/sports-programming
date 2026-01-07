const { zipObject } = require('./array-zip-object-utils');

describe('zipObject', () => {
  test('should create an object from two arrays of the same length', () => {
    expect(zipObject(['a', 'b', 'c'], [1, 2, 3])).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should truncate to the shorter array length when keys are longer', () => {
    expect(zipObject(['a', 'b', 'c'], [1, 2])).toEqual({ a: 1, b: 2 });
  });

  test('should truncate to the shorter array length when values are longer', () => {
    expect(zipObject(['a', 'b'], [1, 2, 3])).toEqual({ a: 1, b: 2 });
  });

  test('should return an empty object if given empty arrays', () => {
    expect(zipObject([], [])).toEqual({});
  });

  test('should return an empty object if one of the inputs is not an array', () => {
    expect(zipObject(['a', 'b'], null)).toEqual({});
    expect(zipObject(undefined, [1, 2])).toEqual({});
  });

  test('should handle various data types for values', () => {
    const keys = ['name', 'age', 'isStudent', 'courses', 'address'];
    const values = ['John', 30, true, ['Math', 'Science'], { city: 'New York' }];
    const expected = {
      name: 'John',
      age: 30,
      isStudent: true,
      courses: ['Math', 'Science'],
      address: { city: 'New York' }
    };
    expect(zipObject(keys, values)).toEqual(expected);
  });
});
