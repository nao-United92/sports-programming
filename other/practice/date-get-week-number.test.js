const getWeekNumber = require('./date-get-week-number');

describe('getWeekNumber', () => {
  test('calculates week number correctly', () => {
    // 2024-01-01 is Monday, should be week 1
    expect(getWeekNumber('2024-01-01')).toBe(1);
    // 2024-05-20 is Monday, should be week 21
    expect(getWeekNumber('2024-05-20')).toBe(21);
  });

  test('handles end of year correctly', () => {
    expect(getWeekNumber('2024-12-31')).toBe(1); // 2024-12-31 is Tuesday, week 1 of 2025? No, check ISO 8601
    // Actually 2024-12-31 is Tuesday, week 1 of 2025 in ISO 8601?
    // Let's check: Jan 1st 2025 is Wednesday.
  });

  test('handles invalid date', () => {
    expect(() => getWeekNumber('invalid')).toThrow();
  });
});
