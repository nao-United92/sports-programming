export const mathGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return mathGCD(b, a % b);
};
