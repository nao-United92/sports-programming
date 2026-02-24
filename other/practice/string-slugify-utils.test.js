import { stringSlugify } from './string-slugify-utils';

describe('stringSlugify', () => {
  test('slugifies a string', () => {
    expect(stringSlugify('Hello World')).toBe('hello-world');
  });

  test('removes special characters', () => {
    expect(stringSlugify('Hello World!')).toBe('hello-world');
  });

  test('replaces spaces with hyphens', () => {
    expect(stringSlugify('Hello   World')).toBe('hello-world');
  });
});
