import { pick } from './object-pick.js';

describe('pick', () => {
  it('should pick specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = ['a', 'c'];
    const expected = { a: 1, c: 3 };
    expect(pick(obj, keys)).toEqual(expected);
  });

  it('should handle non-existent keys gracefully', () => {
    const obj = { a: 1, b: 2 };
    const keys = ['a', 'd'];
    const expected = { a: 1 };
    expect(pick(obj, keys)).toEqual(expected);
  });

  it('should return an empty object if no keys are provided', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, [])).toEqual({});
  });

  it('should return an empty object if the input object is empty', () => {
    expect(pick({}, ['a'])).toEqual({});
  });
});