import { pick } from './object-pick-keys-utils';

describe('pick', () => {
  it('should pick specified keys from an object', () => {
    const obj = { a: 1, b: '2', c: true };
    const keys = ['a', 'c'];
    expect(pick(obj, keys)).toEqual({ a: 1, c: true });
  });

  it('should return an empty object if the original object is null or not an object', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
    expect(pick(123, ['a'])).toEqual({});
  });

  it('should return an empty object if keys array is invalid', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, null)).toEqual({});
    expect(pick(obj, {})).toEqual({});
  });

  it('should ignore keys that do not exist in the object', () => {
    const obj = { a: 1, b: 2 };
    const keys = ['a', 'c'];
    expect(pick(obj, keys)).toEqual({ a: 1 });
  });

  it('should handle an empty keys array', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, [])).toEqual({});
  });
});
