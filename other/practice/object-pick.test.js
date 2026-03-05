const pick = require('./object-pick');

describe('pick', () => {
  const obj = { a: 1, b: '2', c: 3 };

  test('picks specified keys from the object', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('ignores keys that do not exist on the object', () => {
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  test('returns an empty object if no keys are provided', () => {
    expect(pick(obj, [])).toEqual({});
  });

  test('returns an empty object if the input object is null or undefined', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });
});
