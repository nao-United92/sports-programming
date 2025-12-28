const snakeCase = (str) => {
  if (!str) return '';
  return (
    str
      // Replace non-alphanumeric characters with a space
      .replace(/[^a-zA-Z0-9]+/g, ' ')
      // Insert a space between a lowercase and an uppercase letter
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // Trim leading/trailing spaces
      .trim()
      // Replace spaces with underscores
      .split(' ')
      .join('_')
      // Convert to lowercase
      .toLowerCase()
  );
};

module.exports = { snakeCase };
