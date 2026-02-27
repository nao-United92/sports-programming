const unzipAdvanced = (array) => {
  if (!Array.isArray(array) || array.length === 0) return [];
  const maxLength = Math.max(...array.map(sub => (Array.isArray(sub) ? sub.length : 0)));
  const result = Array.from({ length: maxLength }, () => []);
  
  for (const sub of array) {
    for (let i = 0; i < maxLength; i++) {
      result[i].push(sub && sub[i]);
    }
  }
  return result;
};

module.exports = unzipAdvanced;
