const take = (arr, n = 1) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.slice(0, n);
};

export default take;
