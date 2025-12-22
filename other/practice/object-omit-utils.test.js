import { omit } from './object-omit-utils';

describe('omit', () => {
  it('should omit specified properties from an object', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  it('should return the original object if no properties are omitted', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, [])).toEqual({ a: 1, b: 2 });
  });

  it('should handle an empty object', () => {
    expect(omit({}, ['a'])).toEqual({});
  });

  it('should not mutate the original object', () => {
    const obj = { a: 1, b: 2 };
    omit(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: 2 });
  });
});