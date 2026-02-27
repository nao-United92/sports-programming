const sortedUniq = (array) => {
  if (!Array.isArray(array)) return [];
  if (array.length === 0) return [];
  
  const result = [array[0]];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      result.push(array[i]);
    }
  }
  return result;
};

module.exports = sortedUniq;
