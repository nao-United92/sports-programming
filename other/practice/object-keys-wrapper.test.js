import { getKeys } from './object-keys-wrapper';

describe('getKeys', () => {
  test('returns keys of object', () => {
    expect(getKeys({ a: 1, b: 2 })).toEqual(['a', 'b']);
  });

  test('returns empty array for empty object', () => {
    expect(getKeys({})).toEqual([]);
  });

  test('returns empty array for non-object', () => {
    expect(getKeys(null)).toEqual([]);
  });
});
