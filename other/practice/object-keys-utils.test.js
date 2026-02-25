import { objectKeys } from './object-keys-utils';

describe('objectKeys', () => {
  test('returns keys of an object', () => {
    expect(objectKeys({ a: 1, b: 2 })).toEqual(['a', 'b']);
  });

  test('returns empty array for empty object', () => {
    expect(objectKeys({})).toEqual([]);
  });

  test('returns empty array for non-object', () => {
    expect(objectKeys(null)).toEqual([]);
    expect(objectKeys(123)).toEqual([]);
  });
});
