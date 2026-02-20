import { capitalize } from './string-capitalize';

describe('capitalize', () => {
  test('capitalizes the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('converts rest of the string to lowercase', () => {
    expect(capitalize('hELLO')).toBe('Hello');
  });

  test('handles empty string', () => {
    expect(capitalize('')).toBe('');
  });
});
