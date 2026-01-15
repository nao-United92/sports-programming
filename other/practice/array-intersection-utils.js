export const intersection = (a, ...args) => {
  const setA = new Set(a);
  return [...new Set(args.reduce((acc, arr) => {
    return arr.filter(item => setA.has(item));
  }, []))];
};
