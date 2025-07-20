import { capitalize, truncate } from './string-utils';

describe('capitalize', () => {
  test('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('returns an empty string if the input is not a string', () => {
    expect(capitalize(123)).toBe('');
  });

  test('returns an empty string if the input is an empty string', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('truncate', () => {
  test('truncates a string to a specified length', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
  });

  test('does not truncate if the string is shorter than the specified length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('returns the original string if the input is not a string', () => {
    expect(truncate(123, 5)).toBe(123);
  });
});