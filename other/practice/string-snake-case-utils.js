const snakeCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2') // camelCase to snake_case
    .replace(/[\s-]+/g, '_') // spaces and hyphens to underscores
    .toLowerCase()
    .replace(/^_|_$/g, '') // remove leading/trailing underscores
    .replace(/_{2,}/g, '_'); // replace multiple underscores with a single one
};

module.exports = { snakeCase };
