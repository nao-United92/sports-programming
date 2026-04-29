import { isNarcissisticNumber } from './math-is-narcissistic-number';

describe('isNarcissisticNumber', () => {
  test('should return true for narcissistic numbers', () => {
    expect(isNarcissisticNumber(153)).toBe(true); // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
    expect(isNarcissisticNumber(370)).toBe(true); // 3^3 + 7^3 + 0^3 = 27 + 343 + 0 = 370
    expect(isNarcissisticNumber(9474)).toBe(true); // 9^4 + 4^4 + 7^4 + 4^4 = 6561 + 256 + 2401 + 256 = 9474
    expect(isNarcissisticNumber(1)).toBe(true);
  });

  test('should return false for non-narcissistic numbers', () => {
    expect(isNarcissisticNumber(154)).toBe(false);
    expect(isNarcissisticNumber(10)).toBe(false);
  });
});
