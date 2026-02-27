const zipWith = (iteratee, ...arrays) => {
  if (arrays.length === 0) return [];
  const maxLength = Math.max(...arrays.map(arr => arr.length));
  const result = [];
  
  for (let i = 0; i < maxLength; i++) {
    const group = arrays.map(arr => arr[i]);
    result.push(iteratee(...group));
  }
  return result;
};

module.exports = zipWith;
