import { truncate } from './string-truncate.js';

describe('truncate', () => {
  test('should truncate string to specified length', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
  });

  test('should not truncate if string is shorter than length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('should use custom omission', () => {
    expect(truncate('hello world', 5, '!')).toBe('hello!');
  });
  
  test('should handle empty string', () => {
    expect(truncate('', 5)).toBe('');
  });
});
