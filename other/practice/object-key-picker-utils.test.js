const { pick } = require('./object-key-picker-utils');

describe('pick', () => {
  const obj = { a: 1, b: '2', c: true };

  test('should return an object with the selected properties', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: true });
  });

  test('should ignore keys that are not in the object', () => {
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  test('should return an empty object if no keys are provided', () => {
    expect(pick(obj, [])).toEqual({});
  });

  test('should return an empty object if the input object is empty', () => {
    expect(pick({}, ['a'])).toEqual({});
  });

  test('should handle keys that have falsy values', () => {
    const falsyObj = { a: 0, b: '', c: false, d: null, e: undefined };
    expect(pick(falsyObj, ['a', 'b', 'c', 'd', 'e'])).toEqual({
      a: 0,
      b: '',
      c: false,
      d: null,
      e: undefined,
    });
  });
});
