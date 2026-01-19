const kebabCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase to kebab-case
    .replace(/[\s_]+/g, '-') // spaces and underscores to hyphens
    .toLowerCase()
    .replace(/^-+|-+$/g, '') // remove leading/trailing hyphens
    .replace(/-{2,}/g, '-'); // replace multiple hyphens with a single one
};

module.exports = { kebabCase };