function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let k = 1; // 最初の要素は常にユニーク

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}
