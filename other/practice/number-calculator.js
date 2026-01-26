const sum = (numbers) => {
  if (!Array.isArray(numbers)) {
    return 0;
  }
  return numbers.reduce((acc, num) => {
    return typeof num === 'number' && !isNaN(num) ? acc + num : acc;
  }, 0);
};

const average = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }
  const filteredNumbers = numbers.filter(num => typeof num === 'number' && !isNaN(num));
  if (filteredNumbers.length === 0) {
    return 0;
  }
  const total = sum(filteredNumbers);
  return total / filteredNumbers.length;
};

module.exports = { sum, average };
