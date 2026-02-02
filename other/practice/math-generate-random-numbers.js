const generateRandomNumbers = (count, min = 0, max = 1) => {
  if (count < 0) return [];
  const numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(Math.random() * (max - min) + min);
  }
  return numbers;
};

module.exports = generateRandomNumbers;
