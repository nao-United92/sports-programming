const { pick, omit } = require('./object-subset-utils');

describe('pick', () => {
  const obj = { a: 1, b: '2', c: 3 };

  test('should return an object with picked properties', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('should not include properties that are not in the object', () => {
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  test('should return an empty object if no keys are provided', () => {
    expect(pick(obj, [])).toEqual({});
  });

  test('should return an empty object if the source object is null or undefined', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });
});

describe('omit', () => {
  const obj = { a: 1, b: '2', c: 3 };

  test('should return an object without the omitted properties', () => {
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  test('should not change the object if omitted keys do not exist', () => {
    expect(omit(obj, ['d', 'e'])).toEqual({ a: 1, b: '2', c: 3 });
  });

  test('should return the same object if no keys are provided', () => {
    expect(omit(obj, [])).toEqual({ a: 1, b: '2', c: 3 });
  });

  test('should return an empty object if the source object is null or undefined', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
  });
});
