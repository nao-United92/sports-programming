// Clamps a number within the inclusive range specified by the lower and upper bounds
export const clamp = (number, lower, upper) => {
  if (lower === undefined) return number;
  if (upper === undefined) return Math.max(number, lower);
  return Math.min(Math.max(number, lower), upper);
};
