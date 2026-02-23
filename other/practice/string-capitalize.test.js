import { capitalize } from './string-capitalize';

describe('capitalize', () => {
  test('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('converts the rest of the string to lowercase', () => {
    expect(capitalize('hELLO')).toBe('Hello');
  });

  test('returns an empty string for non-string input', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(123)).toBe('');
  });

  test('returns an empty string for empty input', () => {
    expect(capitalize('')).toBe('');
  });
});
