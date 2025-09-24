import { omit } from './omit-utils';

describe('omit', () => {
  it('should omit specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const omitted = omit(obj, ['a', 'c']);
    expect(omitted).toEqual({ b: 2 });
  });

  it('should not modify the original object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    omit(obj, ['a', 'c']);
    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('should ignore keys that do not exist in the object', () => {
    const obj = { a: 1, b: 2 };
    const omitted = omit(obj, ['a', 'd']);
    expect(omitted).toEqual({ b: 2 });
  });

  it('should return the original object if no keys are omitted', () => {
    const obj = { a: 1, b: 2 };
    const omitted = omit(obj, []);
    expect(omitted).toEqual({ a: 1, b: 2 });
  });

  it('should return an empty object if the input object is empty', () => {
    const obj = {};
    const omitted = omit(obj, ['a', 'b']);
    expect(omitted).toEqual({});
  });
});
