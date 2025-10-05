const { pick } = require('./object-pick-utils');

describe('pick', () => {
  test('should pick specified properties from an object', () => {
    const obj = { a: 1, b: '2', c: true };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: true });
  });

  test('should return an empty object if no keys are specified', () => {
    const obj = { a: 1, b: '2', c: true };
    expect(pick(obj, [])).toEqual({});
  });

  test('should ignore keys that do not exist in the object', () => {
    const obj = { a: 1, b: '2' };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1 });
  });

  test('should handle an empty source object', () => {
    expect(pick({}, ['a', 'b'])).toEqual({});
  });
});