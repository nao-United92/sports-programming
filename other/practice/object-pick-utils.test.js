const pick = require('./object-pick-utils').default;

describe('pick', () => {
  const obj = { a: 1, b: 'hello', c: true, d: undefined, e: null };

  test('should pick specified properties from an object', () => {
    expect(pick(obj, 'a', 'c')).toEqual({ a: 1, c: true });
  });

  test('should pick properties when keys are provided as an array', () => {
    expect(pick(obj, ['b', 'e'])).toEqual({ b: 'hello', e: null });
  });

  test('should handle a mix of string arguments and array arguments', () => {
    expect(pick(obj, 'a', ['c', 'e'], 'b')).toEqual({
      a: 1,
      c: true,
      e: null,
      b: 'hello',
    });
  });

  test('should ignore non-existent properties', () => {
    expect(pick(obj, 'a', 'x', 'y')).toEqual({ a: 1 });
  });

  test('should return an empty object if no properties are specified', () => {
    expect(pick(obj)).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(pick(null, 'a')).toEqual({});
    expect(pick(undefined, 'a')).toEqual({});
  });

  test('should not modify the original object', () => {
    const originalObj = { a: 1, b: 2 };
    pick(originalObj, 'a');
    expect(originalObj).toEqual({ a: 1, b: 2 });
  });

  test('should pick properties with undefined values', () => {
    expect(pick(obj, 'd')).toEqual({ d: undefined });
  });

  test('should pick properties with null values', () => {
    expect(pick(obj, 'e')).toEqual({ e: null });
  });
});