const takeRight = (arr, n = 1) => {
  if (n === 0) {
    return [];
  }
  return arr.slice(-n);
};

export default takeRight;
