import { slugify } from './string-slugify-utils.js';

describe('slugify', () => {
  it('should convert basic strings', () => {
    expect(slugify('hello world')).toBe('hello-world');
  });

  it('should handle multiple spaces and hyphens', () => {
    expect(slugify('  hello   world-- ')).toBe('hello-world');
  });

  it('should remove special characters', () => {
    expect(slugify('hello!@#$%^&*()_+=world')).toBe('hello_world');
  });

  it('should handle ampersands', () => {
    expect(slugify('pick & omit')).toBe('pick-and-omit');
  });

  it('should handle accented characters', () => {
    expect(slugify('crème brûlée')).toBe('creme-brulee');
  });

  it('should return an empty string for null or undefined input', () => {
    expect(slugify(null)).toBe('');
    expect(slugify(undefined)).toBe('');
  });

  it('should handle a complex case', () => {
    expect(slugify('!@#$ ąćęłńóśźż_ 123 -- Foo & Bar --')).toBe('acelnoszz_-123-foo-and-bar');
  });
});