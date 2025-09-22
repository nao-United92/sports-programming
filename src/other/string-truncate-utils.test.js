import { truncate } from './string-truncate-utils.js';

describe('truncate', () => {
  test('should truncate a string that is longer than the specified number', () => {
    expect(truncate('Hello world', 5)).toBe('Hello...');
  });

  test('should not truncate a string that is shorter than or equal to the specified number', () => {
    expect(truncate('Hi', 5)).toBe('Hi');
  });

  test('should handle an empty string', () => {
    expect(truncate('', 5)).toBe('');
  });

  test('should handle a number of 0', () => {
    expect(truncate('Hello world', 0)).toBe('...');
  });
});