const nth = (arr, index = 0) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  const len = arr.length;
  // Handle negative index
  const idx = index < 0 ? len + index : index;
  return (idx >= 0 && idx < len) ? arr[idx] : undefined;
};

export { nth };