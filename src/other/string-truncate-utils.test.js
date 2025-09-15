import { truncate } from './string-truncate-utils.js';

describe('truncate', () => {
  test('should truncate a string to the specified length and add ellipsis', () => {
    expect(truncate('hello world', 7)).toBe('hello w...');
    expect(truncate('hello world', 5)).toBe('hello...');
  });

  test('should not truncate if string length is less than or equal to maxLength', () => {
    expect(truncate('hello', 5)).toBe('hello');
    expect(truncate('hi', 5)).toBe('hi');
  });

  test('should return an empty string for empty input', () => {
    expect(truncate('', 5)).toBe('');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(truncate(null, 5)).toBe('');
    expect(truncate(undefined, 5)).toBe('');
    expect(truncate(123, 5)).toBe('');
    expect(truncate({}, 5)).toBe('');
    expect(truncate([], 5)).toBe('');
  });

  test('should handle maxLength of 0', () => {
    expect(truncate('hello', 0)).toBe('...');
  });

  test('should handle maxLength less than 3', () => {
    expect(truncate('hello', 1)).toBe('h...');
    expect(truncate('hello', 2)).toBe('he...');
  });
});
