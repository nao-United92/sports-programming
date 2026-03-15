/**
 * Converts a value to a safe integer.
 * @param {*} value The value to convert.
 * @returns {number} The safe integer.
 */
export const toSafeInteger = (value) => {
  const num = Number(value);
  if (Number.isNaN(num)) return 0;
  if (num === 0) return num;
  const safeNum = Math.min(Math.max(num, Number.MIN_SAFE_INTEGER), Number.MAX_SAFE_INTEGER);
  return Math.trunc(safeNum);
};
