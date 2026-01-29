import pick from './object-pick-utils';

describe('pick', () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: undefined,
    e: null,
  };

  it('should pick specified keys from an object', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('should handle keys that do not exist in the object', () => {
    expect(pick(obj, ['a', 'x'])).toEqual({ a: 1 });
  });

  it('should return an empty object if no keys are specified', () => {
    expect(pick(obj, [])).toEqual({});
  });

  it('should return an empty object if the input object is null or undefined', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });

  it('should handle picking properties with undefined values', () => {
    expect(pick(obj, ['d'])).toEqual({ d: undefined });
  });

  it('should handle picking properties with null values', () => {
    expect(pick(obj, ['e'])).toEqual({ e: null });
  });

  it('should return an empty object if the object is empty', () => {
    expect(pick({}, ['a'])).toEqual({});
  });

  it('should handle non-object inputs', () => {
    expect(pick(123, ['a'])).toEqual({});
    expect(pick('string', ['a'])).toEqual({});
  });
});
