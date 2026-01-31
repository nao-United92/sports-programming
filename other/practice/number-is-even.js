const isEven = (num) => {
  if (typeof num !== 'number') {
    return false;
  }
  return num % 2 === 0;
};

module.exports = isEven;
