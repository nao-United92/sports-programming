import formatDate from './date-format-utils';

describe('formatDate', () => {
  const date = new Date('2023-01-01T14:05:06.007Z'); // January 1, 2023, 14:05:06.007

  test('should format date with default YYYY-MM-DD format', () => {
    expect(formatDate(new Date('2023-01-01'))).toBe('2023-01-01');
    expect(formatDate(new Date('2023-12-31'))).toBe('2023-12-31');
  });

  test('should format date with custom YYYY/MM/DD format', () => {
    expect(formatDate(date, 'YYYY/MM/DD')).toBe('2023/01/01');
  });

  test('should format date with HH:mm:ss format', () => {
    // Note: Due to timezone differences, running this test in different environments
    // might yield different results for hours. The test date is a UTC date.
    // For consistency, let's ensure the `date` object is treated carefully.
    // With `new Date('2023-01-01T14:05:06.007Z')`, `getHours()` will give the local hour.
    // To be precise for testing, it's better to get the local time components for comparison.
    const localDate = new Date('2023-01-01T14:05:06.007'); // Use local time for test
    const localHours = String(localDate.getHours()).padStart(2, '0');
    const localMinutes = String(localDate.getMinutes()).padStart(2, '0');
    const localSeconds = String(localDate.getSeconds()).padStart(2, '0');
    expect(formatDate(localDate, 'HH:mm:ss')).toBe(`${localHours}:${localMinutes}:${localSeconds}`);
  });

  test('should format date with full format YYYY-MM-DD HH:mm:ss SSS', () => {
    const localDate = new Date('2023-01-01T14:05:06.007'); // Use local time for test
    const localHours = String(localDate.getHours()).padStart(2, '0');
    const localMinutes = String(localDate.getMinutes()).padStart(2, '0');
    const localSeconds = String(localDate.getSeconds()).padStart(2, '0');
    const localMilliseconds = String(localDate.getMilliseconds()).padStart(3, '0');

    const expected = `2023-01-01 ${localHours}:${localMinutes}:${localSeconds} ${localMilliseconds}`;
    expect(formatDate(localDate, 'YYYY-MM-DD HH:mm:ss SSS')).toBe(expected);
  });

  test('should handle single digit month/day/hour/minute/second with padding', () => {
    const d = new Date('2023-03-05T08:07:01.002');
    const localHours = String(d.getHours()).padStart(2, '0');
    const localMinutes = String(d.getMinutes()).padStart(2, '0');
    const localSeconds = String(d.getSeconds()).padStart(2, '0');
    const localMilliseconds = String(d.getMilliseconds()).padStart(3, '0');

    expect(formatDate(d, 'YYYY-MM-DD HH:mm:ss SSS'))
      .toBe(`2023-03-05 ${localHours}:${localMinutes}:${localSeconds} ${localMilliseconds}`);
  });

  test('should throw TypeError if first argument is not a valid Date object', () => {
    expect(() => formatDate(null)).toThrow(TypeError);
    expect(() => formatDate(undefined)).toThrow(TypeError);
    expect(() => formatDate('2023-01-01')).toThrow(TypeError);
    expect(() => formatDate(123)).toThrow(TypeError);
    expect(() => formatDate(new Date('invalid date'))).toThrow(TypeError);
  });

  test('should throw TypeError if format argument is not a non-empty string', () => {
    expect(() => formatDate(date, null)).toThrow(TypeError);
    expect(() => formatDate(date, '')).toThrow(TypeError);
    expect(() => formatDate(date, 123)).toThrow(TypeError);
  });
});