const pluralize = (word, count, suffix = 's') => {
  if (typeof word !== 'string' || word.length === 0) {
    return '';
  }
  if (typeof count !== 'number' || isNaN(count)) {
    // If count is not a number, we can default to singular or throw an error.
    // For this utility, let's default to singular form.
    return word;
  }

  if (count === 1) {
    return word;
  }

  // Handle common irregular plural forms (e.g., 'y' to 'ies')
  if (suffix === 'ies' && word.endsWith('y')) {
    return word.slice(0, -1) + suffix;
  }

  return `${word}${suffix}`;
};

module.exports = pluralize;
