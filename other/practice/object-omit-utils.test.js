const {
  omit
} = require('./object-omit-utils');

describe('omit', () => {
  const obj = {
    a: 1,
    b: '2',
    c: 3
  };

  test('should create an object with omitted properties', () => {
    expect(omit(obj, ['a', 'c'])).toEqual({
      b: '2'
    });
  });

  test('should ignore keys that do not exist in the source object', () => {
    expect(omit(obj, ['d'])).toEqual(obj);
  });

  test('should return the same object if no keys are provided', () => {
    expect(omit(obj, [])).toEqual(obj);
  });

  test('should return an empty object for null or undefined input', () => {
    expect(omit(null, ['a', 'b'])).toEqual({});
    expect(omit(undefined, ['a', 'b'])).toEqual({});
  });
});