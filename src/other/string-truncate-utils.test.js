
import { truncate } from './string-truncate-utils';

describe('truncate', () => {
  test('should not truncate if string is shorter than maxLength', () => {
    expect(truncate('hello world', 20)).toBe('hello world');
  });

  test('should truncate and add default ellipsis', () => {
    expect(truncate('hello world', 10)).toBe('hello...');
  });

  test('should truncate and add custom ellipsis', () => {
    expect(truncate('hello world', 10, '--')).toBe('hello wo--');
  });

  test('should handle empty string', () => {
    expect(truncate('', 5)).toBe('');
  });

  test('should handle maxLength equal to string length', () => {
    expect(truncate('hello', 5)).toBe('hello');
  });

  test('should return only ellipsis if maxLength is too small', () => {
    expect(truncate('hello world', 2)).toBe('..');
  });

  test('should return original string for invalid string input', () => {
    expect(truncate(null, 5)).toBe(null);
    expect(truncate(undefined, 5)).toBe(undefined);
    expect(truncate(123, 5)).toBe(123);
  });

  test('should return original string for invalid maxLength input', () => {
    expect(truncate('hello', null)).toBe('hello');
    expect(truncate('hello', undefined)).toBe('hello');
    expect(truncate('hello', -1)).toBe('hello');
  });
});
