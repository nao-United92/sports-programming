const { encode, decode } = require('./base64-converter');

describe('Base64 Converter', () => {
  describe('encode', () => {
    test('should encode a simple ASCII string', () => {
      expect(encode('hello world')).toBe('aGVsbG8gd29ybGQ=');
    });

    test('should encode a string with special characters', () => {
      expect(encode('node.js & javascript')).toBe('bm9kZS5qcyAmIGphdmFzY3JpcHQ=');
    });

    test('should encode a string with Unicode characters', () => {
      expect(encode('こんにちは世界')).toBe('44GT44KT44Gr44Gh44Gv5LiW55WM');
    });

    test('should handle an empty string', () => {
      expect(encode('')).toBe('');
    });

    test('should handle non-string input by converting it to a string', () => {
      expect(encode(12345)).toBe('MTIzNDU=');
    });
  });

  describe('decode', () => {
    test('should decode a simple Base64 string', () => {
      expect(decode('aGVsbG8gd29ybGQ=')).toBe('hello world');
    });

    test('should decode a string with special characters', () => {
      expect(decode('bm9kZS5qcyAmIGphdmFzY3JpcHQ=')).toBe('node.js & javascript');
    });

    test('should decode a string with Unicode characters', () => {
      expect(decode('44GT44KT44Gr44Gh44Gv5LiW55WM')).toBe('こんにちは世界');
    });

    test('should handle an empty string', () => {
      expect(decode('')).toBe('');
    });

    test('should return an empty string for invalid input type', () => {
      expect(decode(null)).toBe('');
      expect(decode(undefined)).toBe('');
      expect(decode(123)).toBe('');
    });

    test('should return an empty string for an invalid Base64 string', () => {
      expect(decode('not-a-base64-string')).toBe('');
    });
  });
});