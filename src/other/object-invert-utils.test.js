import { invert } from './object-invert-utils.js';

describe('invert', () => {
  test('should invert a simple object', () => {
    const object = { a: 1, b: 2, c: 3 };
    expect(invert(object)).toEqual({ 1: 'a', 2: 'b', 3: 'c' });
  });

  test('should handle duplicate values by overwriting with the last key', () => {
    const object = { a: 1, b: 2, c: 1 };
    expect(invert(object)).toEqual({ 1: 'c', 2: 'b' });
  });

  test('should return an empty object for an empty input object', () => {
    expect(invert({})).toEqual({});
  });

  test('should not mutate the original object', () => {
    const object = { a: 1 };
    invert(object);
    expect(object).toEqual({ a: 1 });
  });

  test('should handle null and undefined as input', () => {
    expect(invert(null)).toEqual({});
    expect(invert(undefined)).toEqual({});
  });
});