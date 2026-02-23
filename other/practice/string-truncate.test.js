import { truncate } from './string-truncate';

describe('truncate', () => {
  test('truncates a string that exceeds the specified length', () => {
    expect(truncate('Hello World', 8)).toBe('Hello...');
  });

  test('does not truncate a string that is shorter than the length', () => {
    expect(truncate('Hello', 10)).toBe('Hello');
  });

  test('uses a custom suffix', () => {
    expect(truncate('Hello World', 8, '!')).toBe('Hello W!');
  });

  test('handles default length', () => {
    const longStr = 'a'.repeat(50);
    expect(truncate(longStr)).toHaveLength(30);
    expect(truncate(longStr).endsWith('...')).toBe(true);
  });
});
