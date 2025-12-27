const { pick } = require('./object-pick-utils');

describe('pick', () => {
  const obj = { a: 1, b: '2', c: 3 };

  it('should pick specified keys from an object', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('should not include keys that are not in the object', () => {
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  it('should return an empty object if no keys are specified', () => {
    expect(pick(obj, [])).toEqual({});
  });

  it('should return an empty object if the input object is null or undefined', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });

  it('should handle non-string keys in the keys array gracefully', () => {
    expect(pick(obj, ['a', 2])).toEqual({ a: 1 });
  });
});
