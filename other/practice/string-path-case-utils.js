const pathCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str
    .replace(/([a-z])([A-Z])/g, '$1/$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1/$2')
    .replace(/[^a-zA-Z0-9/]/g, '/')
    .toLowerCase()
    .replace(/^\/+|\/+$/g, '')
    .replace(/\/+/g, '/');
};

module.exports = {
  pathCase
};