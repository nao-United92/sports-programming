
const replaceAt = (arr, i, v) => [...arr.slice(0, i), v, ...arr.slice(i + 1)];
module.exports = replaceAt;
