import { objectEntries } from './object-entries-utils';

describe('objectEntries', () => {
  test('returns entries of an object', () => {
    expect(objectEntries({ a: 1, b: 2 })).toEqual([['a', 1], ['b', 2]]);
  });

  test('returns empty array for empty object', () => {
    expect(objectEntries({})).toEqual([]);
  });

  test('returns empty array for non-object', () => {
    expect(objectEntries(null)).toEqual([]);
  });
});
