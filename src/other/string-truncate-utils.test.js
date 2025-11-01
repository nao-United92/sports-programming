import { truncateString } from './string-truncate-utils';

describe('truncateString', () => {
  test('should return the original string if its length is less than or equal to maxLength', () => {
    expect(truncateString('hello', 5)).toBe('hello');
    expect(truncateString('hi', 5)).toBe('hi');
    expect(truncateString('', 5)).toBe('');
  });

  test('should truncate the string and append ellipsis if length exceeds maxLength and maxLength is sufficient for ellipsis', () => {
    expect(truncateString('hello world', 10)).toBe('hello w...');
    expect(truncateString('a very long string that needs to be truncated', 20)).toBe('a very long strin...');
  });

  test('should handle maxLength exactly equal to string length', () => {
    expect(truncateString('test', 4)).toBe('test');
  });

  test('should handle maxLength less than 3 when truncation is needed', () => {
    expect(truncateString('long string', 2)).toBe('lo');
    expect(truncateString('long string', 1)).toBe('l');
    expect(truncateString('long string', 0)).toBe('');
  });

  test('should throw an error if maxLength is negative', () => {
    expect(() => truncateString('test', -1)).toThrow('maxLength must be a non-negative number.');
  });

  test('should handle empty string with truncation', () => {
    expect(truncateString('', 0)).toBe('');
    expect(truncateString('', 1)).toBe('');
  });
});