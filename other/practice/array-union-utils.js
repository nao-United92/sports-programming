const union = (...arrays) => {
  return [...new Set(arrays.flat())];
};

export default union;