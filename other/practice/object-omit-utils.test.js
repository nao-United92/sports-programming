import { omit } from './object-omit-utils.js';

describe('omit', () => {
  const obj = { a: 1, b: '2', c: true };

  test('should omit specified keys from an object', () => {
    expect(omit(obj, 'a', 'c')).toEqual({ b: '2' });
  });

  test('should return a copy of the object if no keys are specified', () => {
    expect(omit(obj)).toEqual(obj);
    expect(omit(obj)).not.toBe(obj);
  });

  test('should ignore keys that do not exist in the object', () => {
    expect(omit(obj, 'd', 'e')).toEqual(obj);
  });

  test('should return an empty object for non-object inputs', () => {
    expect(omit(null, 'a')).toEqual({});
    expect(omit(undefined, 'a')).toEqual({});
  });

  test('should not modify the original object', () => {
    const originalObj = { ...obj };
    omit(obj, 'a');
    expect(obj).toEqual(originalObj);
  });
});
