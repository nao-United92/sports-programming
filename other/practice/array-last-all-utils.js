const lastAll = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  return arr.slice(1);
};

export default lastAll;