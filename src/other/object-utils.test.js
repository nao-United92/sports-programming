import { pick } from './object-utils.js';

describe('pick', () => {
  const obj = { a: 1, b: '2', c: true };

  test('should pick specified keys', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: true });
  });

  test('should ignore non-existent keys', () => {
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  test('should handle empty keys array', () => {
    expect(pick(obj, [])).toEqual({});
  });

  test('should handle empty object', () => {
    expect(pick({}, ['a'])).toEqual({});
  });
});
