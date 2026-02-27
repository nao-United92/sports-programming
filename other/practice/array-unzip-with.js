const unzipWith = (array, iteratee) => {
  if (!Array.isArray(array) || array.length === 0) return [];
  const result = [];
  const maxLength = Math.max(...array.map(sub => sub.length));
  
  for (let i = 0; i < maxLength; i++) {
    const group = array.map(sub => sub[i]);
    result.push(iteratee(...group));
  }
  return result;
};

module.exports = unzipWith;
