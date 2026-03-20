import { truncateString } from './string-truncate-simple';

describe('truncateString', () => {
  test('truncates string longer than length', () => {
    expect(truncateString('hello world', 5)).toBe('hello...');
  });

  test('does not truncate string shorter than length', () => {
    expect(truncateString('hello', 10)).toBe('hello');
  });
});
