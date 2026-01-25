const unzip = (arr) => {
  const maxLength = Math.max(...arr.map((sub) => sub.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return arr.map((sub) => sub[i]);
  });
};

module.exports = { unzip };
