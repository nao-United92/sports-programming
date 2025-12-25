const kebabCase = (str) => {
  return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2') // camelCase to kebab-case
    .replace(/[_ ]+/g, '-') // snake_case and spaces to kebab-case
    .toLowerCase()
    .replace(/^-+|-+$/g, ''); // trim leading/trailing hyphens
};

module.exports = { kebabCase };
