const unescapeHTML = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
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

export default unescapeHTML;
