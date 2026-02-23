export const average = (...nums) => {
  const numbers = nums.flat();
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
};
