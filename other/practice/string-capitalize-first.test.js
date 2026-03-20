import { capitalizeFirst } from './string-capitalize-first';

describe('capitalizeFirst', () => {
  test('capitalizes the first letter', () => {
    expect(capitalizeFirst('hello')).toBe('Hello');
  });

  test('returns empty string for empty input', () => {
    expect(capitalizeFirst('')).toBe('');
  });

  test('handles single character strings', () => {
    expect(capitalizeFirst('a')).toBe('A');
  });
});
