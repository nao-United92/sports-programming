/**
 * Sanitizes an HTML string to prevent XSS attacks by removing potentially dangerous tags and attributes.
 * This is a basic sanitizer and might not cover all advanced XSS vectors.
 * For robust security, consider using a well-maintained library like DOMPurify.
 *
 * @param {string} html The HTML string to sanitize.
 * @returns {string} The sanitized HTML string.
 */
export const sanitizeHtml = (html) => {
  if (typeof html !== 'string') {
    return '';
  }

  let sanitized = html;

  // Remove script tags
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)[^<]*)*<\/script>/gi, '');

  // Remove common event handlers and dangerous attributes
  sanitized = sanitized.replace(/on\w+="[^"]*"/gi, ''); // e.g., onclick, onerror
  sanitized = sanitized.replace(/javascript:/gi, ''); // e.g., href="javascript:..."
  sanitized = sanitized.replace(/data-bind="[^"]*"/gi, ''); // Example of removing data-bind attributes

  // Remove iframe tags (often used for embedding malicious content)
  sanitized = sanitized.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)[^<]*)*<\/iframe>/gi, '');

  // Basic tag stripping for potentially dangerous tags (e.g., <embed>, <object>)
  sanitized = sanitized.replace(/<\/?(embed|object|applet|form|input|textarea|button|select|option)\b[^>]*>/gi, '');

  return sanitized;
};
