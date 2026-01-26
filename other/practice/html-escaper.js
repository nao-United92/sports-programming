const escapeHtml = (str) => {
  if (typeof str !== 'string') return '';
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const unescapeHtml = (str) => {
  if (typeof str !== 'string') return '';
  const div = document.createElement('div');
  div.innerHTML = str;
  return div.textContent || div.innerText || '';
};

module.exports = { escapeHtml, unescapeHtml };
