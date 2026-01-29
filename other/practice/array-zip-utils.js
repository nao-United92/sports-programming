const zip = (...arrays) => {
  if (arrays.length === 0) {
    return [];
  }
  const maxLength = Math.max(...arrays.map(arr => arr.length));
  return Array.from({ length: maxLength }, (_, i) => arrays.map(arr => arr[i]));
};

export default zip;