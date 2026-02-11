const initial = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  return arr.slice(0, arr.length - 1);
};

export { initial };