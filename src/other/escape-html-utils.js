
/**
 * Escapes HTML special characters in a string.
 *
 * @param {string} str The string to escape.
 * @returns {string} The escaped string.
 */
export const escapeHTML = (str) => {
  if (typeof str !== 'string') {
    return '';
  }

  return str.replace(/[&<>'"`]/g, (match) => {
    switch (match) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&#39;';
      case '`':
        return '&#x60;';
      default:
        return match;
    }
  });
};

/**
 * Unescapes HTML special characters in a string.
 *
 * @param {string} str The string to unescape.
 * @returns {string} The unescaped string.
 */
export const unescapeHTML = (str) => {
  if (typeof str !== 'string') {
    return '';
  }

  return str.replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&#x60;/g, (match) => {
    switch (match) {
      case '&amp;':
        return '&';
      case '&lt;':
        return '<';
      case '&gt;':
        return '>';
      case '&quot;':
        return '"';
      case '&#39;':
        return "'";
      case '&#x60;':
        return '`';
      default:
        return match;
    }
  });
};
