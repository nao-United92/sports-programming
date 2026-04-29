import { isHappyNumber } from './math-is-happy-number';

describe('isHappyNumber', () => {
  test('should return true for happy numbers', () => {
    expect(isHappyNumber(19)).toBe(true);
    expect(isHappyNumber(7)).toBe(true);
    expect(isHappyNumber(10)).toBe(true);
  });

  test('should return false for unhappy numbers', () => {
    expect(isHappyNumber(4)).toBe(false);
    expect(isHappyNumber(2)).toBe(false);
  });
});
