const { sanitizeHTML } = require('./html-sanitizer');

describe('sanitizeHTML', () => {
  it('should remove a simple script tag', () => {
    const dirty = '<p>Hello</p><script>alert("XSS")</script>';
    const clean = '<p>Hello</p>';
    expect(sanitizeHTML(dirty)).toBe(clean);
  });

  it('should remove a script tag with attributes', () => {
    const dirty = '<p>World</p><script src="malicious.js"></script>';
    const clean = '<p>World</p>';
    expect(sanitizeHTML(dirty)).toBe(clean);
  });

  it('should remove an onclick attribute', () => {
    const dirty = '<a href="#" onclick="alert(\'XSS\')">Click me</a>';
    const clean = '<a href="#">Click me</a>';
    expect(sanitizeHTML(dirty)).toBe(clean);
  });

  it('should remove various on* event attributes', () => {
    const dirty = '<img src="img.png" onerror="alert(1)" onload="alert(2)">';
    const clean = '<img src="img.png">';
    expect(sanitizeHTML(dirty)).toBe(clean);
  });

  it('should handle mixed content', () => {
    const dirty = '<div><h1>Title</h1><script>doEvil()</script><p onmouseover="beEvil()">Safe</p></div>';
    const clean = '<div><h1>Title</h1><p>Safe</p></div>';
    expect(sanitizeHTML(dirty)).toBe(clean);
  });

  it('should not modify a clean HTML string', () => {
    const clean = '<div><p>This is perfectly safe.</p><a href="/path">Link</a></div>';
    expect(sanitizeHTML(clean)).toBe(clean);
  });

  it('should return an empty string for null or undefined input', () => {
    expect(sanitizeHTML(null)).toBe('');
    expect(sanitizeHTML(undefined)).toBe('');
  });

  it('should handle multi-line script tags', () => {
    const dirty = '<p>Content</p><script>\n  const x = 1;\n  alert(x);\n</script>';
    const clean = '<p>Content</p>';
    expect(sanitizeHTML(dirty)).toBe(clean);
  });

  it('should handle attributes with single quotes', () => {
    const dirty = '<button onclick=\'alert("evil")\'>I am a button</button>';
    const clean = '<button>I am a button</button>';
    expect(sanitizeHTML(dirty)).toBe(clean);
  });
});