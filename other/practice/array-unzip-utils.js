const unzip = (arr) => {
  if (!arr || arr.length === 0) {
    return [];
  }
  const maxLength = Math.max(...arr.map(subArr => subArr.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return arr.map(subArr => subArr[i]);
  });
};

module.exports = { unzip };
