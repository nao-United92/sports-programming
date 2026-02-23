import { slugify } from './string-slugify';

describe('slugify', () => {
  test('converts a string to a slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
    expect(slugify('Foo Bar Baz')).toBe('foo-bar-baz');
  });

  test('removes special characters', () => {
    expect(slugify('Hello World!')).toBe('hello-world');
  });

  test('handles multiple spaces and dashes', () => {
    expect(slugify('hello   world---test')).toBe('hello-world-test');
  });

  test('returns empty string for non-string input', () => {
    expect(slugify(null)).toBe('');
  });
});
