const { pick } = require('./object-pick-utils');

describe('pick', () => {
  test('should create an object with picked properties', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('should not include properties that are not in the source object', () => {
    const obj = { a: 1, b: '2' };
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  test('should return an empty object if no keys are provided', () => {
    const obj = { a: 1, b: '2' };
    expect(pick(obj, [])).toEqual({});
  });

  test('should return an empty object if the source object is null or undefined', () => {
    expect(pick(null, ['a', 'b'])).toEqual({});
    expect(pick(undefined, ['a', 'b'])).toEqual({});
  });

  test('should not modify the original object', () => {
    const obj = { a: 1, b: '2' };
    pick(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: '2' });
  });
});