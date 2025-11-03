import { truncate } from './string-utils.js';

describe('truncate', () => {
  it('should not truncate a string shorter than the specified length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  it('should truncate a string longer than the specified length', () => {
    const longString = 'This is a very long string';
    expect(truncate(longString, 15)).toBe('This is a ve...');
  });

  it('should use the default suffix', () => {
    const longString = 'Another long example';
    expect(truncate(longString, 10)).toBe('Another...');
  });

  it('should use a custom suffix', () => {
    const longString = 'Custom suffix test';
    expect(truncate(longString, 15, '---')).toBe('Custom suffi---');
  });

  it('should handle edge case where length is less than or equal to suffix length', () => {
    const longString = 'Short';
    expect(truncate(longString, 3, '...')).toBe('...');
    expect(truncate(longString, 2, '...')).toBe('...');
  });
});
