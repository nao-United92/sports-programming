import { pick } from './object-pick-utils';

describe('pick', () => {
  test('should create an object with picked properties', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('should return an empty object if no keys are picked', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pick(obj, [])).toEqual({});
  });

  test('should handle keys that do not exist in the object', () => {
    const obj = { a: 1, b: '2' };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1 });
  });

  test('should return an empty object for an empty source object', () => {
    expect(pick({}, ['a', 'b'])).toEqual({});
  });
});