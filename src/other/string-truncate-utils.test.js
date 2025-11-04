
import { truncate } from './string-truncate-utils.js';

describe('truncate', () => {
  const text = 'hi-diddly-ho there, neighborino';

  test('should not truncate if string is shorter than length', () => {
    expect(truncate(text, { length: 50 })).toBe(text);
  });

  test('should truncate string to default length', () => {
    const expected = 'hi-diddly-ho there, neighbo...';
    expect(truncate(text)).toBe(expected);
  });

  test('should truncate string to a specified length', () => {
    const expected = 'hi-diddly-...';
    expect(truncate(text, { length: 12 })).toBe(expected);
  });

  test('should use a custom omission string', () => {
    const expected = 'hi-diddly-ho there, [...]';
    expect(truncate(text, { length: 24, omission: ' [...]' })).toBe(expected);
  });

  test('should not have omission string longer than length', () => {
    const expected = '...';
    expect(truncate(text, { length: 2, omission: '...' })).toBe(expected);
  });

   test('should return an empty string if length is 0', () => {
    expect(truncate(text, { length: 0, omission: '' })).toBe('');
  });
});
