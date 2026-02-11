const tail = (arr) => {
  if (!Array.isArray(arr) || arr.length <= 1) {
    return [];
  }
  return arr.slice(1);
};

export { tail };