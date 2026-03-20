import { head } from './array-head-alias';

describe('head', () => {
  test('returns the first element of an array', () => {
    expect(head([1, 2, 3])).toBe(1);
  });
});
