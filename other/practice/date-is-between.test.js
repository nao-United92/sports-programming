const isBetween = require('./date-is-between');

describe('isBetween', () => {
  test('returns true when date is within range', () => {
    expect(isBetween('2024-05-15', '2024-05-01', '2024-05-31')).toBe(true);
  });

  test('returns true for boundary cases', () => {
    expect(isBetween('2024-05-01', '2024-05-01', '2024-05-31')).toBe(true);
    expect(isBetween('2024-05-31', '2024-05-01', '2024-05-31')).toBe(true);
  });

  test('returns false when date is outside range', () => {
    expect(isBetween('2024-04-30', '2024-05-01', '2024-05-31')).toBe(false);
    expect(isBetween('2024-06-01', '2024-05-01', '2024-05-31')).toBe(false);
  });

  test('throws error for invalid date strings', () => {
    expect(() => isBetween('invalid', '2024-01-01', '2024-01-02')).toThrow();
  });
});
