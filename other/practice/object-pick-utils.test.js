const {
  pick
} = require('./object-pick-utils');

describe('pick', () => {
  const obj = {
    a: 1,
    b: '2',
    c: 3
  };

  test('should create an object with picked properties', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({
      a: 1,
      c: 3
    });
  });

  test('should ignore keys that do not exist in the source object', () => {
    expect(pick(obj, ['a', 'd'])).toEqual({
      a: 1
    });
  });

  test('should return an empty object if no keys are provided', () => {
    expect(pick(obj, [])).toEqual({});
  });

  test('should return an empty object for null or undefined input', () => {
    expect(pick(null, ['a', 'b'])).toEqual({});
    expect(pick(undefined, ['a', 'b'])).toEqual({});
  });
});