const { pick, omit } = require('./object-pick-omit-utils.js');

describe('pick', () => {
  test('should pick specified properties from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('should ignore keys that do not exist', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  test('should return an empty object if no keys are picked', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, [])).toEqual({});
  });
});

describe('omit', () => {
  test('should omit specified properties from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  test('should ignore keys that do not exist', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, ['c', 'd'])).toEqual({ a: 1, b: 2 });
  });

  test('should return the original object if no keys are omitted', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, [])).toEqual({ a: 1, b: 2 });
  });
});