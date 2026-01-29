const kebabCase = (str) => {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase to kebab-case
    .replace(/[\s_]+/g, '-') // spaces or underscores to hyphens
    .toLowerCase()
    .replace(/^-+|-+$/g, ''); // remove leading/trailing hyphens
};

export default kebabCase;