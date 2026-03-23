// Performs right-to-left function composition
export const compose = (...fns) => {
  return (x) => fns.reduceRight((v, f) => f(v), x);
};
