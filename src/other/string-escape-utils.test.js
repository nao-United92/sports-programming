
import { escapeHTML, unescapeHTML } from './string-escape-utils.js';

describe('escapeHTML', () => {
  test('should escape HTML special characters', () => {
    expect(escapeHTML('<script>alert("xss")</script>')).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
  });

  test('should handle strings with no special characters', () => {
    expect(escapeHTML('hello world')).toBe('hello world');
  });
});

describe('unescapeHTML', () => {
  test('should unescape HTML special characters', () => {
    expect(unescapeHTML('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;')).toBe('<script>alert("xss")</script>');
  });

  test('should handle strings with no special characters', () => {
    expect(unescapeHTML('hello world')).toBe('hello world');
  });
});
