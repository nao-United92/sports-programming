const escapeHTML = (str) => {
  if (str === null || str === undefined) {
    return '';
  }
  return String(str).replace(/[&<>"']/g, (match) => {
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
        return '&#39;'; // &apos; is not supported in HTML4, so &#39; is safer.
      default:
        return match;
    }
  });
};

module.exports = { escapeHTML };
