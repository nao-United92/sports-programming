const countBy = (arr, fn) => {
  const count = {};
  for (const item of arr) {
    const key = typeof fn === 'function' ? fn(item) : item[fn];
    count[key] = (count[key] || 0) + 1;
  }
  return count;
};

export default countBy;
