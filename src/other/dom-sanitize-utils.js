/**
 * Sanitizes an HTML string by removing potentially dangerous tags and attributes
 * to prevent XSS attacks. This implementation is basic and intended for demonstration.
 * For production use, a more robust, well-tested library like DOMPurify is recommended.
 *
 * @param {string} dirtyHTML The potentially unsafe HTML string.
 * @returns {string} The sanitized HTML string.
 */
const sanitizeHTML = (dirtyHTML) => {
  if (typeof dirtyHTML !== 'string' || !dirtyHTML) {
    return '';
  }

  // DOMParser is not available in a standard Node.js environment,
  // but it is in the JSDOM environment used by Jest for this project.
  const parser = new DOMParser();
  const doc = parser.parseFromString(dirtyHTML, 'text/html');

  // 1. Remove dangerous tags
  const dangerousTags = ['script', 'style', 'iframe', 'object', 'embed', 'form'];
  dangerousTags.forEach(tag => {
    doc.querySelectorAll(tag).forEach(el => el.remove());
  });

  // 2. Remove dangerous attributes from all elements
  doc.querySelectorAll('*').forEach(el => {
    for (const attr of [...el.attributes]) {
      const attrName = attr.name.toLowerCase();
      // Remove on* event handlers
      if (attrName.startsWith('on')) {
        el.removeAttribute(attr.name);
      }
      // Sanitize attributes that can load external resources or execute scripts
      if (['href', 'src', 'data', 'action', 'formaction'].includes(attrName)) {
        const value = (attr.value || '').trim().toLowerCase();
        if (value.startsWith('javascript:') || value.startsWith('data:')) {
          el.removeAttribute(attr.name);
        }
      }
    }
  });

  // Return the sanitized HTML from the body
  return doc.body.innerHTML;
};

module.exports = { sanitizeHTML };
