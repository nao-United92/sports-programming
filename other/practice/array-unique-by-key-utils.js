const uniqueBy = (arr, key) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  const seen = new Set();
  return arr.filter(item => {
    const value = item[key];
    if (seen.has(value)) {
      return false;
    } else {
      seen.add(value);
      return true;
    }
  });
};

export default uniqueBy;
