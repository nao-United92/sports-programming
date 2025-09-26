const { pick } = require('./object-pick-utils.js');

describe('pick', () => {
  const obj = { a: 1, b: 2, c: 3 };

  test('should pick a single property', () => {
    expect(pick(obj, 'a')).toEqual({ a: 1 });
  });

  test('should pick multiple properties', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('should not modify the original object', () => {
    pick(obj, 'a');
    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should return an empty object if no properties are picked', () => {
    expect(pick(obj, 'd')).toEqual({});
  });

  test('should handle an empty object', () => {
    expect(pick({}, 'a')).toEqual({});
  });

  test('should handle null or undefined object', () => {
    expect(pick(null, 'a')).toEqual({});
    expect(pick(undefined, 'a')).toEqual({});
  });
});
