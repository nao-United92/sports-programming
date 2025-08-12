import { truncate } from './string-utils.js';

describe('truncate', () => {
  it('should not truncate a string shorter than or equal to the specified length', () => {
    expect(truncate('hello world', 20)).toBe('hello world');
    expect(truncate('hello world', 11)).toBe('hello world');
  });

  it('should truncate a string longer than the specified length', () => {
    expect(truncate('hello world, this is a long string', 15)).toBe('hello world,...');
  });

  it('should use a custom suffix', () => {
    expect(truncate('hello world', 8, '--')).toBe('hello--');
  });

  it('should handle length equal to suffix length', () => {
    expect(truncate('hello world', 3, '...')).toBe('...');
  });

  it('should handle length smaller than suffix length', () => {
    expect(truncate('hello world', 2, '...')).toBe('..');
  });

  it('should handle length of 0', () => {
    expect(truncate('hello world', 0, '...')).toBe('');
  });

  it('should handle an empty string input', () => {
    expect(truncate('', 10)).toBe('');
  });
});