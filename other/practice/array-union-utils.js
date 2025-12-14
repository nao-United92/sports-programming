const union = (...arrays) => {
  const flat = arrays.flat();
  return [...new Set(flat)];
};

export default union;
