import { tally } from './array-tally.js';

describe('tally', () => {
  it('should count occurrences of each element in an array', () => {
    const arr = [1, 2, 2, 3, 3, 3];
    const expected = { 1: 1, 2: 2, 3: 3 };
    expect(tally(arr)).toEqual(expected);
  });

  it('should handle string elements', () => {
    const arr = ['a', 'b', 'a', 'c', 'b'];
    const expected = { a: 2, b: 2, c: 1 };
    expect(tally(arr)).toEqual(expected);
  });

  it('should return an empty object for an empty array', () => {
    expect(tally([])).toEqual({});
  });

  it('should handle mixed data types', () => {
    const arr = [1, 'a', 1, true, 'a', false];
    const expected = { 1: 2, a: 2, true: 1, false: 1 };
    expect(tally(arr)).toEqual(expected);
  });
});
