import { pick } from './object-pick-utils.js';

describe('pick', () => {
  const obj = { a: 1, b: '2', c: true };

  test('should pick specified keys from an object', () => {
    expect(pick(obj, 'a', 'c')).toEqual({ a: 1, c: true });
  });

  test('should return an empty object if no keys are specified', () => {
    expect(pick(obj)).toEqual({});
  });

  test('should ignore keys that do not exist in the object', () => {
    expect(pick(obj, 'a', 'd')).toEqual({ a: 1 });
  });

  test('should return an empty object for non-object inputs', () => {
    expect(pick(null, 'a')).toEqual({});
    expect(pick(undefined, 'a')).toEqual({});
    expect(pick('string', 'a')).toEqual({});
  });

  test('should handle an empty object', () => {
    expect(pick({}, 'a')).toEqual({});
  });
});
