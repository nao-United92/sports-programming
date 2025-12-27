const pluck = (arr, key) => {
  if (!Array.isArray(arr) || arr.length === 0 || !key) {
    return [];
  }
  return arr.map((item) => item[key]);
};

export default pluck;