const { formatDate } = require('./date-format');

describe('formatDate', () => {
  const testDate = new Date('2023-01-02T14:05:06.000Z'); // UTC
  const testDateLocal = new Date(2023, 0, 2, 14, 5, 6); // Local time zone

  test('should format date with default format (YYYY-MM-DD HH:mm:ss)', () => {
    // Note: This test depends on the local timezone where Jest is run.
    // If running in UTC, it might be '2023-01-02 14:05:06'.
    // Adjust expected value based on your local timezone offset.
    // For simplicity, let's assume a fixed offset or just test the parts that are consistent.
    const expected = formatDate(testDateLocal, 'YYYY-MM-DD HH:mm:ss');
    const parts = expected.split(/[\s:-]/);
    expect(parts[0]).toBe('2023');
    expect(parts[1]).toBe('01');
    expect(parts[2]).toBe('02');
    expect(parts[3]).toBe('14'); // Hours are local
    expect(parts[4]).toBe('05');
    expect(parts[5]).toBe('06');
  });

  test('should format date with custom format YYYY/MM/DD', () => {
    expect(formatDate(testDateLocal, 'YYYY/MM/DD')).toBe('2023/01/02');
  });

  test('should format date with custom format DD-MM-YYYY', () => {
    expect(formatDate(testDateLocal, 'DD-MM-YYYY')).toBe('02-01-2023');
  });

  test('should format date with custom format HH:mm', () => {
    expect(formatDate(testDateLocal, 'HH:mm')).toBe('14:05');
  });

  test('should format date with combined custom format', () => {
    expect(formatDate(testDateLocal, 'MM/DD/YYYY HH:mm')).toBe('01/02/2023 14:05');
  });

  test('should handle single digit values with leading zeros', () => {
    const singleDigitDate = new Date(2023, 0, 1, 1, 1, 1); // Jan 1, 1:01:01
    expect(formatDate(singleDigitDate)).toBe('2023-01-01 01:01:01');
  });

  test('should throw TypeError if date is not a valid Date object', () => {
    expect(() => formatDate('not a date')).toThrow(TypeError);
    expect(() => formatDate(null)).toThrow(TypeError);
    expect(() => formatDate(undefined)).toThrow(TypeError);
    expect(() => formatDate(12345)).toThrow(TypeError);
    expect(() => formatDate(new Date('invalid date'))).toThrow(TypeError);
  });
});
