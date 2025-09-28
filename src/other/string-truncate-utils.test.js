
import { truncate } from './string-truncate-utils';

describe('truncate', () => {
  test('should truncate a string that is longer than the specified length', () => {
    expect(truncate('hello world', 8)).toBe('hello...');
  });

  test('should not truncate a string that is shorter than or equal to the specified length', () => {
    expect(truncate('hello', 8)).toBe('hello');
  });

  test('should use a custom suffix if provided', () => {
    expect(truncate('hello world', 8, '!')).toBe('hello w!');
  });
});
