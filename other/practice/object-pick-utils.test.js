import { pick } from './object-pick-utils.js';

describe('pick', () => {
  it('should pick specified keys from an object', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('should return an empty object if no keys are specified', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pick(obj, [])).toEqual({});
  });

  it('should ignore keys that do not exist in the object', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1 });
  });

  it('should return an empty object for null or non-object inputs', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
    expect(pick(123, ['a'])).toEqual({});
  });

  it('should handle an empty source object', () => {
    expect(pick({}, ['a', 'b'])).toEqual({});
  });

  it('should handle cases where keys parameter is not an array', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, null)).toEqual({});
    expect(pick(obj, 'a')).toEqual({});
  });
});
