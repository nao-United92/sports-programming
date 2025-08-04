import { truncate } from './truncate-utils.js';

describe('truncate', () => {
  test('should truncate a string', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
  });

  test('should not truncate a string if it is shorter than the limit', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });
});
