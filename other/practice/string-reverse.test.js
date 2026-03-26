import { reverse } from './string-reverse.js';

describe('reverse', () => {
  it('should reverse a string', () => {
    expect(reverse('hello')).toBe('olleh');
  });

  it('should return an empty string if input is not a string', () => {
    expect(reverse(null)).toBe('');
    expect(reverse(123)).toBe('');
  });

  it('should handle empty strings', () => {
    expect(reverse('')).toBe('');
  });

  it('should reverse strings with special characters', () => {
    expect(reverse('h!e@l#l$o%')).toBe('%o$l#l@e!h');
  });
});
