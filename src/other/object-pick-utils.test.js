import { pick } from './object-pick-utils.js';

describe('pick', () => {
  test('should create an object with picked properties', () => {
    const object = { a: 1, b: '2', c: 3 };
    expect(pick(object, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('should ignore properties that are not in the source object', () => {
    const object = { a: 1, b: 2 };
    expect(pick(object, ['a', 'd'])).toEqual({ a: 1 });
  });

  test('should not modify the original object', () => {
    const object = { a: 1, b: 2 };
    pick(object, ['a']);
    expect(object).toEqual({ a: 1, b: 2 });
  });

  test('should return an empty object if the source is null or undefined', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });

  test('should return an empty object if no paths are provided', () => {
    const object = { a: 1 };
    expect(pick(object, [])).toEqual({});
  });

  test('should pick all properties if all keys are provided', () => {
    const object = { a: 1, b: 2 };
    expect(pick(object, ['a', 'b'])).toEqual({ a: 1, b: 2 });
  });
});