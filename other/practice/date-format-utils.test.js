import formatDate from './date-format-utils';

describe('formatDate', () => {
  const testDate = new Date('2023-01-24T14:35:08.123Z'); // January 24, 2023 14:35:08.123 UTC

  // Test case 1: Full date and time
  test('should format date to YYYY-MM-DD HH:mm:ss.ms', () => {
    expect(formatDate(testDate, 'YYYY-MM-DD HH:mm:ss.ms')).toBe('2023-01-24 14:35:08.123');
  });

  // Test case 2: Date only
  test('should format date to YYYY/MM/DD', () => {
    expect(formatDate(testDate, 'YYYY/MM/DD')).toBe('2023/01/24');
  });

  // Test case 3: Time only
  test('should format time to HH:mm:ss', () => {
    expect(formatDate(testDate, 'HH:mm:ss')).toBe('14:35:08');
  });

  // Test case 4: Custom format string
  test('should format date with a custom string', () => {
    expect(formatDate(testDate, 'MM/DD/YYYY at HHh mmm sss ms')).toBe('01/24/2023 at 14h 35m 08s 123');
  });

  // Test case 5: Single digit month, day, hour, minute, second
  test('should format single digit components with leading zeros', () => {
    const singleDigitDate = new Date('2023-02-05T03:04:05.006Z'); // February 5, 2023 03:04:05.006 UTC
    expect(formatDate(singleDigitDate, 'YYYY-MM-DD HH:mm:ss.ms')).toBe('2023-02-05 03:04:05.006');
  });

  // Test case 6: Milliseconds less than 100
  test('should format milliseconds with leading zeros when less than 100', () => {
    const msDate = new Date('2023-01-01T00:00:00.007Z');
    expect(formatDate(msDate, 'ms')).toBe('007');
  });

  // Test case 7: Milliseconds less than 10
  test('should format milliseconds with two leading zeros when less than 10', () => {
    const msDate = new Date('2023-01-01T00:00:00.001Z');
    expect(formatDate(msDate, 'ms')).toBe('001');
  });

  // Test case 8: Invalid Date object
  test('should throw TypeError for an invalid Date object', () => {
    expect(() => formatDate(new Date('invalid date'), 'YYYY')).toThrow(TypeError);
    expect(() => formatDate(null, 'YYYY')).toThrow(TypeError);
    expect(() => formatDate(undefined, 'YYYY')).toThrow(TypeError);
  });

  // Test case 9: Invalid format string
  test('should throw TypeError for a non-string format argument', () => {
    expect(() => formatDate(new Date(), null)).toThrow(TypeError);
    expect(() => formatDate(new Date(), 123)).toThrow(TypeError);
    expect(() => formatDate(new Date(), {})).toThrow(TypeError);
  });
});
