import { truncate } from './string-truncate-utils.js';

describe('truncate', () => {
  test('should truncate a string that is longer than the specified length', () => {
    expect(truncate('hello world', 8)).toBe('hello...');
  });

  test('should not truncate a string that is shorter than or equal to the specified length', () => {
    expect(truncate('hello', 10)).toBe('hello');
    expect(truncate('hello', 5)).toBe('hello');
  });

  test('should use a custom omission string', () => {
    expect(truncate('hello world', 10, '... more')).toBe('hel... more');
  });

  test('should truncate the omission string if length is smaller than omission length', () => {
    expect(truncate('hello world', 2, '...')).toBe('..');
  });

  test('should handle an empty string input', () => {
    expect(truncate('', 5)).toBe('');
  });

  test('should handle a zero length', () => {
    expect(truncate('hello world', 0)).toBe('');
  });
});
