const isEven = (num) => {
  if (typeof num !== 'number' || !Number.isFinite(num)) {
    throw new Error('Input must be a finite number.');
  }
  return num % 2 === 0;
};

module.exports = isEven;