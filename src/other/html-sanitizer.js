/**
 * A simple HTML sanitizer.
 * WARNING: This is a basic implementation and may not be sufficient for
 * production use against sophisticated XSS attacks. It's intended as a
 * basic utility. For production, consider using a more robust library
 * like DOMPurify.
 */

/**
 * Removes script tags and on* event handlers from an HTML string.
 * @param {string | null | undefined} htmlString The HTML string to sanitize.
 * @returns {string} The sanitized HTML string.
 */
function sanitizeHTML(htmlString) {
  if (htmlString === null || htmlString === undefined) {
    return '';
  }

  let sanitized = String(htmlString);

  // Remove <script>...</script> tags and their content
  sanitized = sanitized.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');

  // Remove on<event> attributes
  sanitized = sanitized.replace(/\s(on\w+)=("([^"]*)"|'([^']*)'|[^\s>]+)/gi, '');

  return sanitized;
}

module.exports = {
  sanitizeHTML,
};
