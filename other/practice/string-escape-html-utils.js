const escapeHTML = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
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

export default escapeHTML;
