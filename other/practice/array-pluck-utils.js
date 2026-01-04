const pluck = (arr, key) => {
  return arr.map(item => {
    if (typeof item !== 'object' || item === null) {
      return undefined; // Or throw an error, depending on desired behavior for non-objects
    }
    // Handle nested properties if key contains '.'
    if (key.includes('.')) {
      return key.split('.').reduce((acc, part) => (acc && acc[part] !== undefined) ? acc[part] : undefined, item);
    }
    return item[key];
  });
};

module.exports = { pluck };
