import { truncate } from './string-truncate-utils';

describe('truncate', () => {
  const str = 'hello world, this is a test';

  it('should not truncate a string shorter than the specified length', () => {
    expect(truncate(str, 30)).toBe(str);
  });

  it('should truncate a string to the specified length', () => {
    const truncated = truncate(str, 20);
    expect(truncated).toBe('hello world, this...');
    expect(truncated.length).toBe(20);
  });

  it('should use a custom omission string', () => {
    const truncated = truncate(str, 20, '---');
    expect(truncated).toBe('hello world, thi---');
    expect(truncated.length).toBe(20);
  });

  it('should handle edge cases', () => {
    expect(truncate('hi', 2)).toBe('hi');
    expect(truncate('hi', 1, '.')).toBe('.');
  });
});
