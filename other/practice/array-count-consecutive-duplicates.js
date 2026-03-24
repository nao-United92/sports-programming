function countConsecutiveDuplicates(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  return array.reduce((acc, curr) => {
    if (acc.length > 0 && acc[acc.length - 1][0] === curr) {
      acc[acc.length - 1][1]++;
    } else {
      acc.push([curr, 1]);
    }
    return acc;
  }, []);
}
module.exports = countConsecutiveDuplicates;
