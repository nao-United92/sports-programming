const sum = (arr) => {
  if (!Array.isArray(arr)) {
    return 0;
  }
  return arr.reduce((acc, val) => {
    return typeof val === 'number' ? acc + val : acc;
  }, 0);
};

export default sum;