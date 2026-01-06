const padZeros = (num, width) => {
  if (typeof num !== 'number' || !Number.isFinite(num)) {
    throw new Error('Input number must be a finite number.');
  }
  if (typeof width !== 'number' || !Number.isInteger(width) || width < 0) {
    throw new Error('Width must be a non-negative integer.');
  }

  const isNegative = num < 0;
  const absNum = Math.abs(num);
  const numString = String(absNum);

  const currentLength = numString.length;
  if (currentLength >= width) {
    return isNegative ? `-${numString}` : numString;
  }

  const zerosNeeded = width - currentLength;
  const paddedString = '0'.repeat(zerosNeeded) + numString;

  return isNegative ? `-${paddedString}` : paddedString;
};

module.exports = padZeros;
