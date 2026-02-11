const zip = (...arrays) => {
  if (arrays.length === 0) {
    return [];
  }
  const maxLength = Math.max(...arrays.map(arr => arr.length));
  return Array.from({ length: maxLength }, (_, i) =>
    Array.from({ length: arrays.length }, (_, j) => arrays[j][i])
  );
};

export { zip };