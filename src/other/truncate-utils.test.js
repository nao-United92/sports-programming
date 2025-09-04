import truncate from './truncate-utils.js';

describe('truncate', () => {
  const text = 'hi-diddly-ho there, neighborino';

  test('should truncate a string with default options', () => {
    const expected = 'hi-diddly-ho there, neighbo...';
    expect(truncate(text)).toBe(expected);
  });

  test('should not truncate if string is shorter than or equal to length', () => {
    expect(truncate(text, { length: text.length })).toBe(text);
    expect(truncate(text, { length: 50 })).toBe(text);
  });

  test('should truncate to a specified length', () => {
    const expected = 'hi-diddly-h...';
    expect(truncate(text, { length: 14 })).toBe(expected);
  });

  test('should use a custom omission string', () => {
    const expected = 'hi-diddly-ho  [...] ';
    expect(truncate(text, { length: 20, omission: ' [...] ' })).toBe(expected);
  });

  test('should handle length shorter than omission string', () => {
    expect(truncate(text, { length: 5, omission: '......' })).toBe('.....');
    expect(truncate(text, { length: 3, omission: '...' })).toBe('...');
  });

  test('should return the original value if it is not a string', () => {
    expect(truncate(null)).toBeNull();
    expect(truncate(undefined)).toBeUndefined();
    const obj = {};
    expect(truncate(obj)).toBe(obj);
    expect(truncate(123)).toBe(123);
  });
});