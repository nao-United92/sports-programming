import { objectValues } from './object-values-utils';

describe('objectValues', () => {
  test('returns values of an object', () => {
    expect(objectValues({ a: 1, b: 2 })).toEqual([1, 2]);
  });

  test('returns empty array for empty object', () => {
    expect(objectValues({})).toEqual([]);
  });

  test('returns empty array for non-object', () => {
    expect(objectValues(null)).toEqual([]);
  });
});
