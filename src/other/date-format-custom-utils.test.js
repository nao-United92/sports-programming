import { formatDateCustom } from './date-format-custom-utils.js';

describe('Date Format Custom Utilities', () => {
  const date = new Date(2023, 8, 23, 14, 5, 8); // September 23, 2023, 2:05:08 PM

  test('should format full year', () => {
    expect(formatDateCustom(date, 'YYYY')).toBe('2023');
  });

  test('should format two-digit year', () => {
    expect(formatDateCustom(date, 'YY')).toBe('23');
  });

  test('should format two-digit month', () => {
    expect(formatDateCustom(date, 'MM')).toBe('09');
  });

  test('should format month', () => {
    expect(formatDateCustom(date, 'M')).toBe('9');
  });

  test('should format two-digit day', () => {
    expect(formatDateCustom(date, 'DD')).toBe('23');
  });

  test('should format day', () => {
    expect(formatDateCustom(date, 'D')).toBe('23');
  });

  test('should format two-digit 24-hour', () => {
    expect(formatDateCustom(date, 'HH')).toBe('14');
  });

  test('should format 24-hour', () => {
    expect(formatDateCustom(date, 'H')).toBe('14');
  });

  test('should format two-digit 12-hour', () => {
    expect(formatDateCustom(date, 'hh')).toBe('02');
  });

  test('should format 12-hour', () => {
    expect(formatDateCustom(date, 'h')).toBe('2');
  });

  test('should format two-digit minute', () => {
    expect(formatDateCustom(date, 'mm')).toBe('05');
  });

  test('should format minute', () => {
    expect(formatDateCustom(date, 'm')).toBe('5');
  });

  test('should format two-digit second', () => {
    expect(formatDateCustom(date, 'ss')).toBe('08');
  });

  test('should format second', () => {
    expect(formatDateCustom(date, 's')).toBe('8');
  });

  test('should format AM/PM', () => {
    expect(formatDateCustom(date, 'A')).toBe('PM');
    const amDate = new Date(2023, 0, 1, 9, 0, 0); // 9 AM
    expect(formatDateCustom(amDate, 'A')).toBe('AM');
  });

  test('should format am/pm', () => {
    expect(formatDateCustom(date, 'a')).toBe('pm');
    const amDate = new Date(2023, 0, 1, 9, 0, 0); // 9 AM
    expect(formatDateCustom(amDate, 'a')).toBe('am');
  });

  test('should format a complex string', () => {
    expect(formatDateCustom(date, 'YYYY-MM-DD HH:mm:ss A')).toBe('2023-09-23 14:05:08 PM');
  });

  test('should format another complex string', () => {
    expect(formatDateCustom(date, 'M/D/YY h:m:s a')).toBe('9/23/23 2:5:8 pm');
  });

  test('should throw an error for an invalid Date object', () => {
    expect(() => formatDateCustom(null, 'YYYY')).toThrow('Invalid Date object provided.');
    expect(() => formatDateCustom(undefined, 'YYYY')).toThrow('Invalid Date object provided.');
    expect(() => formatDateCustom('not a date', 'YYYY')).toThrow('Invalid Date object provided.');
    expect(() => formatDateCustom(new Date('invalid'), 'YYYY')).toThrow('Invalid Date object provided.');
  });
});