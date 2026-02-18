export const mathAverageValue = (nums) => {
  if (!nums.length) return 0;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
};
