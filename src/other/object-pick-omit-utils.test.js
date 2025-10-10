const { pick, omit } = require('./object-pick-omit-utils.js');

describe('pick', () => {
  const obj = { a: 1, b: '2', c: 3 };

  test('should create an object with picked properties', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('should not include properties that are not in the source object', () => {
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  test('should return an empty object if no keys are provided', () => {
    expect(pick(obj, [])).toEqual({});
  });

  test('should return an empty object if the source object is null or undefined', () => {
    expect(pick(null, ['a', 'c'])).toEqual({});
    expect(pick(undefined, ['a', 'c'])).toEqual({});
  });
});

describe('omit', () => {
  const obj = { a: 1, b: '2', c: 3 };

  test('should create an object with omitted properties', () => {
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  test('should return the original object if keys to omit are not in the object', () => {
    expect(omit(obj, ['d', 'e'])).toEqual({ a: 1, b: '2', c: 3 });
  });

  test('should return the original object if no keys are provided', () => {
    expect(omit(obj, [])).toEqual({ a: 1, b: '2', c: 3 });
  });

  test('should return an empty object if the source object is null or undefined', () => {
    expect(omit(null, ['a', 'c'])).toEqual({});
    expect(omit(undefined, ['a', 'c'])).toEqual({});
  });
});
