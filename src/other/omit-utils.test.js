import { omit } from './omit-utils';

describe('omit', () => {
  test('should omit specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const omitted = omit(obj, ['a', 'c']);
    expect(omitted).toEqual({ b: 2 });
  });

  test('should not modify the original object', () => {
    const obj = { a: 1, b: 2 };
    omit(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: 2 });
  });

  test('should return the same object if no keys are specified', () => {
    const obj = { a: 1, b: 2 };
    const omitted = omit(obj, []);
    expect(omitted).toEqual({ a: 1, b: 2 });
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    const omitted = omit(obj, ['a', 'b']);
    expect(omitted).toEqual({});
  });
});
