
const stringCountVowels = (str) => {
  const match = str.match(/[aeiou]/gi);
  return match ? match.length : 0;
};

module.exports = stringCountVowels;
