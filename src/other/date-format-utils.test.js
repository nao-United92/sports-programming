import { formatDate } from './date-format-utils';

describe('formatDate', () => {
  const testDate = new Date('2023-01-15T14:30:05Z'); // UTC time

  test('should format date to YYYY-MM-DD by default', () => {
    // Adjust for local timezone if necessary, or use a fixed timezone for tests
    const localDate = new Date('2023-01-15T14:30:05'); // Assuming local time for consistency
    const year = localDate.getFullYear();
    const month = String(localDate.getMonth() + 1).padStart(2, '0');
    const day = String(localDate.getDate()).padStart(2, '0');
    expect(formatDate(localDate)).toBe(`${year}-${month}-${day}`);
  });

  test('should format date to YYYY/MM/DD', () => {
    const localDate = new Date('2023-01-15T14:30:05');
    const year = localDate.getFullYear();
    const month = String(localDate.getMonth() + 1).padStart(2, '0');
    const day = String(localDate.getDate()).padStart(2, '0');
    expect(formatDate(localDate, 'YYYY/MM/DD')).toBe(`${year}/${month}/${day}`);
  });

  test('should format date to HH:mm:ss', () => {
    const localDate = new Date('2023-01-15T14:30:05');
    const hours = String(localDate.getHours()).padStart(2, '0');
    const minutes = String(localDate.getMinutes()).padStart(2, '0');
    const seconds = String(localDate.getSeconds()).padStart(2, '0');
    expect(formatDate(localDate, 'HH:mm:ss')).toBe(`${hours}:${minutes}:${seconds}`);
  });

  test('should format date to YYYY-MM-DD HH:mm:ss', () => {
    const localDate = new Date('2023-01-15T14:30:05');
    const year = localDate.getFullYear();
    const month = String(localDate.getMonth() + 1).padStart(2, '0');
    const day = String(localDate.getDate()).padStart(2, '0');
    const hours = String(localDate.getHours()).padStart(2, '0');
    const minutes = String(localDate.getMinutes()).padStart(2, '0');
    const seconds = String(localDate.getSeconds()).padStart(2, '0');
    expect(formatDate(localDate, 'YYYY-MM-DD HH:mm:ss')).toBe(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
  });

  test('should handle single digit month/day/hour/minute/second with padding', () => {
    const singleDigitDate = new Date('2023-03-05T04:02:01Z'); // UTC
    const localDate = new Date('2023-03-05T04:02:01'); // Local
    const year = localDate.getFullYear();
    const month = String(localDate.getMonth() + 1).padStart(2, '0');
    const day = String(localDate.getDate()).padStart(2, '0');
    const hours = String(localDate.getHours()).padStart(2, '0');
    const minutes = String(localDate.getMinutes()).padStart(2, '0');
    const seconds = String(localDate.getSeconds()).padStart(2, '0');
    expect(formatDate(localDate, 'YYYY-MM-DD HH:mm:ss')).toBe(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
  });

  test('should handle invalid date input', () => {
    // Invalid date will result in "Invalid Date" object, which will produce "NaN" for date parts
    const invalidDate = new Date('invalid date string');
    const year = invalidDate.getFullYear(); // NaN
    const month = String(invalidDate.getMonth() + 1).padStart(2, '0'); // "NaN"
    const day = String(invalidDate.getDate()).padStart(2, '0'); // "NaN"
    const hours = String(invalidDate.getHours()).padStart(2, '0'); // "NaN"
    const minutes = String(invalidDate.getMinutes()).padStart(2, '0'); // "NaN"
    const seconds = String(invalidDate.getSeconds()).padStart(2, '0'); // "NaN"

    const expected = `${year}-${month}-${day}`; // Default format
    expect(formatDate('invalid date string')).toBe(expected);
  });

  test('should handle number as date input (timestamp)', () => {
    const timestamp = 1673706605000; // Corresponds to 2023-01-15T14:30:05Z
    const dateFromTimestamp = new Date(timestamp);
    const year = dateFromTimestamp.getFullYear();
    const month = String(dateFromTimestamp.getMonth() + 1).padStart(2, '0');
    const day = String(dateFromTimestamp.getDate()).padStart(2, '0');
    const hours = String(dateFromTimestamp.getHours()).padStart(2, '0');
    const minutes = String(dateFromTimestamp.getMinutes()).padStart(2, '0');
    const seconds = String(dateFromTimestamp.getSeconds()).padStart(2, '0');
    expect(formatDate(timestamp, 'YYYY-MM-DD HH:mm:ss')).toBe(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
  });
});