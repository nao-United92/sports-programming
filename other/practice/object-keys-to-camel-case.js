const objectKeysToCamelCase = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(v => objectKeysToCamelCase(v));
  }

  return Object.keys(obj).reduce((acc, key) => {
    const camelKey = key.replace(/([-_][a-z])/ig, ($1) => {
      return $1.toUpperCase()
        .replace('-', '')
        .replace('_', '');
    });
    acc[camelKey] = objectKeysToCamelCase(obj[key]);
    return acc;
  }, {});
};

module.exports = objectKeysToCamelCase;
