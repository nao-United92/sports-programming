import { calculateAge, getDaysInMonth } from './date-practice.js';

describe('Date Practice', () => {
  describe('calculateAge', () => {
    test('should return correct age', () => {
      const birthDate = new Date('1990-01-01');
      const expectedAge = new Date().getFullYear() - 1990;
      expect(calculateAge(birthDate)).toBe(expectedAge);
    });
  });

  describe('getDaysInMonth', () => {
    test('should return correct number of days in a month', () => {
      expect(getDaysInMonth(2023, 2)).toBe(28);
      expect(getDaysInMonth(2024, 2)).toBe(29); // Leap year
      expect(getDaysInMonth(2023, 4)).toBe(30);
      expect(getDaysInMonth(2023, 1)).toBe(31);
    });
  });
});
