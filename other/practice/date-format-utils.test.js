const formatDate = require('./date-format-utils');

describe('formatDate', () => {
  const testDate = new Date('2023-01-15T10:00:00Z'); // January 15, 2023, 10:00:00 UTC

  test('should format date with default options and en-US locale', () => {
    // Expecting "January 15, 2023" for en-US.
    // Note: The actual output can vary slightly based on the Node.js or browser's locale data.
    // We'll use a flexible regex for month/day order and ensure correct year.
    const formatted = formatDate(testDate);
    expect(formatted).toMatch(/^(January 15, 2023|15 January 2023)$/);
  });

  test('should format date with custom options for full date and time', () => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
      hour12: false, // Force 24-hour format
    };
    const formatted = formatDate(testDate, 'en-US', options);
    // Adjust regex to match "January 15, 2023 at 10:00:00 AM GMT", "January 15, 2023 at 10:00:00 PM GMT+X"
    // The actual time will depend on the machine's timezone settings relative to UTC (testDate is UTC).
    // The `timeZoneName: 'short'` can produce `GMT+X`, `UTC`, `JST`, `CST`, etc.
    expect(formatted).toMatch(/January 15, 2023 at \d{2}:\d{2}:\d{2} (AM|PM|GMT[+-]\d{1,2}|UTC|JST|CDT|CST|EDT|EST|PDT|PST|AEST)/); // Added AEST for potential common zones, and AM/PM for flexibility
  });

  test('should format date for ja-JP locale', () => {
    const formatted = formatDate(testDate, 'ja-JP');
    // Expected format for ja-JP: "2023年1月15日"
    expect(formatted).toBe('2023年1月15日');
  });

  test('should format date for de-DE locale with full options', () => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const formatted = formatDate(testDate, 'de-DE', options);
    // Expected format for de-DE: "Sonntag, 15. Januar 2023"
    expect(formatted).toBe('Sonntag, 15. Januar 2023');
  });

  test('should throw an error for invalid date objects', () => {
    expect(() => formatDate(new Date('invalid date'))).toThrow('Input must be a valid Date object.');
    expect(() => formatDate(null)).toThrow('Input must be a valid Date object.');
    expect(() => formatDate('not a date')).toThrow('Input must be a valid Date object.');
  });

  test('should fall back to en-US for invalid locale (warning)', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const formatted = formatDate(testDate, 'invalid-locale');
    // Fallback should use default options and en-US
    expect(formatted).toMatch(/^(January 15, 2023|15 January 2023)$/);
    expect(consoleWarnSpy).toHaveBeenCalled();
    consoleWarnSpy.mockRestore();
  });

  test('should fall back to en-US for invalid options (warning)', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const invalidOptions = {
      month: 'invalid'
    }; // 'invalid' is not a valid month style
    const formatted = formatDate(testDate, 'en-US', invalidOptions);
    // Fallback should use default options and en-US
    expect(formatted).toMatch(/^(January 15, 2023|15 January 2023)$/);
    expect(consoleWarnSpy).toHaveBeenCalled();
    consoleWarnSpy.mockRestore();
  });
});