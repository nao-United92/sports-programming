export const zip = (...arrays) => {
  if (!arrays || arrays.length === 0) {
    return [];
  }
  const maxLength = Math.max(...arrays.map(arr => arr.length));
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    const group = arrays.map(arr => (i < arr.length ? arr[i] : undefined));
    result.push(group);
  }

  return result;
};
