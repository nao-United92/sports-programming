const splitWords = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return [];
  }
  // Split by spaces, hyphens, underscores, and remove empty strings
  return str.split(/[\s_-]+/).filter(Boolean);
};

export default splitWords;