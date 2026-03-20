import { getValues } from './object-values-wrapper';

describe('getValues', () => {
  test('returns values of object', () => {
    expect(getValues({ a: 1, b: 2 })).toEqual([1, 2]);
  });

  test('returns empty array for empty object', () => {
    expect(getValues({})).toEqual([]);
  });
});
