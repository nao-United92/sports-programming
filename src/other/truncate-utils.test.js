import { truncate } from './truncate-utils.js';

describe('truncate', () => {
  const str = 'hi-diddly-ho there, neighborino';

  test('should truncate a string to a default length of 30', () => {
    const expected = 'hi-diddly-ho there, neighbo...';
    expect(truncate(str)).toBe(expected);
  });

  test('should not truncate if string is shorter than or equal to length', () => {
    expect(truncate(str, { length: str.length })).toBe(str);
    expect(truncate(str, { length: str.length + 1 })).toBe(str);
    expect(truncate('short')).toBe('short');
  });

  test('should truncate to a specified length', () => {
    const expected = 'hi-diddly-ho...';
    expect(truncate(str, { length: 15 })).toBe(expected);
  });

  test('should use a custom omission string', () => {
    const expected = 'hi-diddly-ho there, neigh[...]';
    expect(truncate(str, { omission: '[...]' })).toBe(expected);
  });

  test('should not have a length greater than `length`', () => {
    const customOmission = ' [...] ';
    const length = 20;
    const result = truncate(str, { length, omission: customOmission });
    expect(result.length).toBeLessThanOrEqual(length);
  });

  test('should return an empty string if input is null or undefined', () => {
    expect(truncate(null)).toBe(null);
    expect(truncate(undefined)).toBe(undefined);
  });

  test('should handle omission longer than length', () => {
    const length = 5;
    const omission = '.........';
    const expected = '.....';
    expect(truncate(str, { length, omission })).toBe(expected);
  });
});