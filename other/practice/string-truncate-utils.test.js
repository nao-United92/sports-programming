import { stringTruncate } from './string-truncate-utils';

describe('stringTruncate', () => {
  test('truncates a string', () => {
    expect(stringTruncate('hello world', 8)).toBe('hello...');
  });

  test('does not truncate if string is shorter than length', () => {
    expect(stringTruncate('hello', 10)).toBe('hello');
  });

  test('uses custom ending', () => {
    expect(stringTruncate('hello world', 8, '!')).toBe('hello w!');
  });
});
