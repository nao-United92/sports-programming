import { getFileExtension } from './file-extension';

describe('getFileExtension', () => {
  test('returns the extension of a filename', () => {
    expect(getFileExtension('test.js')).toBe('js');
    expect(getFileExtension('archive.tar.gz')).toBe('gz');
  });

  test('returns empty string if no extension', () => {
    expect(getFileExtension('test')).toBe('');
    expect(getFileExtension('.gitignore')).toBe('');
  });

  test('handles non-string input', () => {
    expect(getFileExtension(null)).toBe('');
  });
});
