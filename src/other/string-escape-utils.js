export const escapeHTML = (str) => {
  return str.replace(
    /[&<>"']/g,
    (match) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      }[match])
  );
};

export const unescapeHTML = (str) => {
  return str.replace(
    /&amp;|&lt;|&gt;|&quot;|&#39;/g,
    (match) =>
      ({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
      }[match])
  );
};