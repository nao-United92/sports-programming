import { inRange } from './math-in-range';

describe('inRange', () => {
  test('returns true if number is in range', () => {
    expect(inRange(5, 0, 10)).toBe(true);
    expect(inRange(0, 0, 10)).toBe(true);
  });

  test('returns false if number is out of range', () => {
    expect(inRange(-1, 0, 10)).toBe(false);
    expect(inRange(10, 0, 10)).toBe(false);
  });
});
