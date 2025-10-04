
import { isCreditCard } from './is-credit-card-utils.js';

describe('isCreditCard', () => {
  it('should return true for valid credit card numbers', () => {
    expect(isCreditCard('49927398716')).toBe(true);
    expect(isCreditCard('79927398713')).toBe(true);
  });

  it('should return false for invalid credit card numbers', () => {
    expect(isCreditCard('49927398717')).toBe(false);
    expect(isCreditCard('1234567890123456')).toBe(false);
  });

  it('should handle credit card numbers with spaces and dashes', () => {
    expect(isCreditCard('4992-7398-716')).toBe(true);
    expect(isCreditCard('4992 7398 716')).toBe(true);
  });

  it('should return false for invalid input types', () => {
    expect(isCreditCard(null)).toBe(false);
    expect(isCreditCard(undefined)).toBe(false);
    expect(isCreditCard(1234567890123456)).toBe(false);
    expect(isCreditCard({})).toBe(false);
    expect(isCreditCard([])).toBe(false);
  });

  it('should return false for card numbers with incorrect length', () => {
    expect(isCreditCard('123456789012')).toBe(false); // 12 digits
    expect(isCreditCard('12345678901234567890')).toBe(false); // 20 digits
  });
});
