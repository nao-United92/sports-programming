const keysIn = (obj) => {
  if (obj === null || obj === undefined) {
    return [];
  }

  const result = [];
  for (const key in obj) {
    result.push(key);
  }
  return result;
};

module.exports = keysIn;
