const { encode, decode } = require('./base64-converter');

describe('Base64 Converter', () => {
  const testCases = [
    { name: 'ASCII string', value: 'Hello, World!' },
    { name: 'String with spaces and symbols', value: 'test=1&query=some value' },
    { name: 'Japanese string', value: 'こんにちは、世界！' },
    { name: 'Emoji string', value: '😊👍🎉' },
    { name: 'Empty string', value: '' },
  ];

  testCases.forEach(({ name, value }) => {
    it(`should correctly encode and decode a ${name}`, () => {
      const encoded = encode(value);
      const decoded = decode(encoded);
      expect(decoded).toBe(value);
      if (value) {
        expect(encoded).not.toBe(value);
      }
    });
  });

  it('should return an empty string for non-string input', () => {
    expect(encode(null)).toBe('');
    expect(encode(undefined)).toBe('');
    expect(encode(123)).toBe('');
    expect(decode(null)).toBe('');
    expect(decode(undefined)).toBe('');
    expect(decode(123)).toBe('');
  });

  it('should handle invalid Base64 input in decode gracefully', () => {
    // Node's Buffer.from with 'base64' silently ignores invalid characters.
    // We test that it doesn't throw and returns a result (often partially decoded or empty).
    const invalidBase64 = 'this is not base64!!';
    let decoded;
    expect(() => {
      decoded = decode(invalidBase64);
    }).not.toThrow();
    // The exact output can vary, but it should not be the original invalid string.
    expect(decoded).not.toBe(invalidBase64);
  });
});
