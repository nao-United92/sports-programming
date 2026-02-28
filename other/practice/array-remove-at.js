
const removeAt = (arr, i) => [...arr.slice(0, i), ...arr.slice(i + 1)];
module.exports = removeAt;
