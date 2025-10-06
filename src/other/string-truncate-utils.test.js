import { truncate } from './string-truncate-utils.js';

describe('truncate', () => {
  const text = 'This is a long string to test truncation.';

  it('should not truncate a string shorter than the specified length', () => {
    expect(truncate(text, 100)).toBe(text);
  });

  it('should truncate a string and add a default suffix', () => {
    expect(truncate(text, 20)).toBe('This is a long...');
  });

  it('should truncate a string with a custom suffix', () => {
    expect(truncate(text, 20, { suffix: ' read more' })).toBe('This is a long read more');
  });

  it('should not respect word boundaries if specified', () => {
    const options = { respectWordBoundaries: false };
    expect(truncate(text, 20, options)).toBe('This is a long str...');
  });

  it('should handle a single long word by hard truncating', () => {
    const longWord = 'Supercalifragilisticexpialidocious';
    expect(truncate(longWord, 20)).toBe('Supercalifragilist...');
  });

  it('should return the original string if length is equal', () => {
    expect(truncate(text, text.length)).toBe(text);
  });

  it('should handle null or undefined input', () => {
    expect(truncate(null, 10)).toBe(null);
    expect(truncate(undefined, 10)).toBe(undefined);
  });
});
