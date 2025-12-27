const initial = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  return arr.slice(0, -1);
};

export default initial;