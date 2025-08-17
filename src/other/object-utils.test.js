import { pick, omit } from './object-utils.js';

describe('pick', () => {
  test('should return an object with picked properties', () => {
    const obj = { a: 1, b: '2', c: true };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: true });
  });

  test('should return an empty object if keys do not exist', () => {
    const obj = { a: 1, b: '2', c: true };
    expect(pick(obj, ['d', 'e'])).toEqual({});
  });

  test('should return an empty object for null or undefined input', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });
});

describe('omit', () => {
  test('should return an object with omitted properties', () => {
    const obj = { a: 1, b: '2', c: true };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  test('should return the original object if keys do not exist', () => {
    const obj = { a: 1, b: '2', c: true };
    expect(omit(obj, ['d', 'e'])).toEqual({ a: 1, b: '2', c: true });
  });

  test('should return an empty object for null or undefined input', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
  });
});
