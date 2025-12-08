const zip = (...arrays) => {
  if (!arrays || arrays.length === 0) {
    return [];
  }
  const maxLength = Math.max(...arrays.map(arr => arr.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return arrays.map(arr => arr[i]);
  });
};

module.exports = zip;