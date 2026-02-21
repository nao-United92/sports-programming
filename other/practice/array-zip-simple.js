
const zip = (...arrays) => {
  if (!arrays.length) return [];
  const minLength = Math.min(...arrays.map((arr) => arr.length));
  return Array.from({ length: minLength }, (_, i) => arrays.map((arr) => arr[i]));
};

module.exports = zip;
