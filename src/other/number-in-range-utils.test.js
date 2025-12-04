import { inRange } from './number-in-range-utils';

describe('inRange', () => {
  test('should return true for a number within the range', () => {
    expect(inRange(3, 2, 4)).toBe(true);
  });

  test('should return false for a number outside the range', () => {
    expect(inRange(5, 2, 4)).toBe(false);
  });

  test('should handle the start of the range correctly (inclusive)', () => {
    expect(inRange(2, 2, 4)).toBe(true);
  });

  test('should handle the end of the range correctly (exclusive)', () => {
    expect(inRange(4, 2, 4)).toBe(false);
  });

  test('should work with a single argument (range from 0)', () => {
    expect(inRange(2, 4)).toBe(true);
    expect(inRange(4, 4)).toBe(false);
  });

  test('should swap start and end if start is greater', () => {
    expect(inRange(3, 4, 2)).toBe(true);
  });
});
