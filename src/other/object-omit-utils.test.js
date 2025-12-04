import { omit } from './object-omit-utils';

describe('omit', () => {
  test('should create an object with omitted properties', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  test('should return the same object if no keys are omitted', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(omit(obj, [])).toEqual({ a: 1, b: '2', c: 3 });
  });

  test('should handle keys that do not exist in the object', () => {
    const obj = { a: 1, b: '2' };
    expect(omit(obj, ['c', 'd'])).toEqual({ a: 1, b: '2' });
  });

  test('should return an empty object for an empty source object', () => {
    expect(omit({}, ['a', 'b'])).toEqual({});
  });
});