export const clamp = (number, lower, upper) => {
  if (typeof number !== 'number' || typeof lower !== 'number' || typeof upper !== 'number') {
    return NaN;
  }
  
  const min = Math.min(lower, upper);
  const max = Math.max(lower, upper);

  return Math.max(min, Math.min(number, max));
};
