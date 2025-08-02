import { pick } from './pick-utils.js';

describe('pick', () => {
  const obj = { a: 1, b: '2', c: true };

  test('should return a new object with picked properties', () => {
    const result = pick(obj, ['a', 'c']);
    expect(result).toEqual({ a: 1, c: true });
  });

  test('should not include properties that are not in the source object', () => {
    const result = pick(obj, ['a', 'd']);
    expect(result).toEqual({ a: 1 });
  });

  test('should return an empty object if no keys are picked', () => {
    const result = pick(obj, []);
    expect(result).toEqual({});
  });

  test('should return an empty object if the source is not an object', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });

  test('should not modify the original object', () => {
    pick(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: '2', c: true });
  });
});