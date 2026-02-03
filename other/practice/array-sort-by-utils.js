export const sortBy = (arr, fn) => {
  return [...arr].sort((a, b) => {
    const valA = typeof fn === 'function' ? fn(a) : a[fn];
    const valB = typeof fn === 'function' ? fn(b) : b[fn];
    return valA > valB ? 1 : valA < valB ? -1 : 0;
  });
};