const { sanitizeHTML } = require('./dom-sanitize-utils');

describe('sanitizeHTML', () => {
  test('should return an empty string for empty or invalid input', () => {
    expect(sanitizeHTML('')).toBe('');
    expect(sanitizeHTML(null)).toBe('');
    expect(sanitizeHTML(undefined)).toBe('');
    expect(sanitizeHTML(123)).toBe('');
  });

  test('should allow safe HTML tags and content', () => {
    const safeHTML = '<p>This is <b>safe</b> content.</p>';
    expect(sanitizeHTML(safeHTML)).toBe(safeHTML);
  });

  test('should remove script tags and their content', () => {
    const dirtyHTML = '<p>Hello</p><script>alert("XSS")</script>';
    expect(sanitizeHTML(dirtyHTML)).toBe('<p>Hello</p>');
  });

  test('should remove style tags', () => {
    const dirtyHTML = '<style>body { background: red; }</style><p>Styled</p>';
    expect(sanitizeHTML(dirtyHTML)).toBe('<p>Styled</p>');
  });

  test('should remove event handler attributes like onclick', () => {
    const dirtyHTML = '<a onclick="alert(\'XSS\')">Click me</a>';
    expect(sanitizeHTML(dirtyHTML)).toBe('<a>Click me</a>');
  });

  test('should remove on* attributes regardless of case', () => {
    const dirtyHTML = '<img src="image.jpg" oNeRrOr="alert(\'XSS\')">';
    expect(sanitizeHTML(dirtyHTML)).toBe('<img src="image.jpg">');
  });

  test('should remove javascript: from href attributes', () => {
    const dirtyHTML = '<a href="javascript:alert(\'XSS\')">Malicious Link</a>';
    expect(sanitizeHTML(dirtyHTML)).toBe('<a>Malicious Link</a>');
  });

  test('should remove data: from src attributes', () => {
    const dirtyHTML = '<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">';
    expect(sanitizeHTML(dirtyHTML)).toBe('<img>');
  });

  test('should allow valid href attributes', () => {
    const safeLink = '<a href="https://example.com">Safe Link</a>';
    expect(sanitizeHTML(safeLink)).toBe(safeLink);
    const safeMailto = '<a href="mailto:test@example.com">Mail Link</a>';
    expect(sanitizeHTML(safeMailto)).toBe(safeMailto);
  });

  test('should handle a complex mix of safe and unsafe content', () => {
    const complexHTML = `
      <h1>Welcome</h1>
      <p>Here is some content.</p>
      <script>doEvil();</script>
      <div onclick="doMoreEvil()">
        <a href="javascript:alert(1)">Click bait</a>
        <b>and some bold text</b>
      </div>
      <iframe></iframe>
    `;
    const expectedHTML = `
      <h1>Welcome</h1>
      <p>Here is some content.</p>
      <div>
        <a>Click bait</a>
        <b>and some bold text</b>
      </div>
      
    `;
    // Normalize whitespace for comparison
    const normalize = (str) => str.replace(/\s+/g, ' ').trim();
    expect(normalize(sanitizeHTML(complexHTML))).toBe(normalize(expectedHTML));
  });
});