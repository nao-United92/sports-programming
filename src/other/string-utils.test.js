import { slugify } from './string-utils.js';

describe('slugify', () => {
  it('should convert string to slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('should handle special characters', () => {
    expect(slugify('àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż')).toBe('aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz');
  });

  it('should handle spaces and multiple hyphens', () => {
    expect(slugify('  leading and trailing spaces  ')).toBe('leading-and-trailing-spaces');
    expect(slugify('multiple---hyphens')).toBe('multiple-hyphens');
  });

  it('should handle non-string input', () => {
    expect(slugify(null)).toBe('');
    expect(slugify(undefined)).toBe('');
    expect(slugify(123)).toBe('');
  });
});