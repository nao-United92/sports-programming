const { getFileNameFromUrl } = require('./url-get-file-name');

describe('getFileNameFromUrl', () => {
  test('should extract file name from a simple URL', () => {
    const url = 'http://example.com/files/document.pdf';
    expect(getFileNameFromUrl(url)).toBe('document.pdf');
  });

  test('should extract file name from a URL with query parameters', () => {
    const url = 'http://example.com/assets/image.png?version=1.0&id=123';
    expect(getFileNameFromUrl(url)).toBe('image.png');
  });

  test('should extract file name from a URL with hash fragment', () => {
    const url = 'http://example.com/scripts/main.js#section';
    expect(getFileNameFromUrl(url)).toBe('main.js');
  });

  test('should return file name for a root level file', () => {
    const url = 'http://example.com/index.html';
    expect(getFileNameFromUrl(url)).toBe('index.html');
  });

  test('should return file name when URL has multiple path segments', () => {
    const url = 'http://example.com/a/b/c/file.txt';
    expect(getFileNameFromUrl(url)).toBe('file.txt');
  });

  test('should return null if no file name is present (ends with /)', () => {
    const url = 'http://example.com/path/';
    expect(getFileNameFromUrl(url)).toBeNull();
  });

  test('should return null if no file name is present (ends without / but is a directory)', () => {
    const url = 'http://example.com/path';
    expect(getFileNameFromUrl(url)).toBeNull();
  });

  test('should throw TypeError if URL is not a string', () => {
    expect(() => getFileNameFromUrl(123)).toThrow(TypeError);
    expect(() => getFileNameFromUrl(null)).toThrow(TypeError);
    expect(() => getFileNameFromUrl(undefined)).toThrow(TypeError);
    expect(() => getFileNameFromUrl({})).toThrow(TypeError);
  });

  test('should throw Error if an invalid URL is provided', () => {
    expect(() => getFileNameFromUrl('invalid-url-string')).toThrow('Invalid URL provided');
  });
});
