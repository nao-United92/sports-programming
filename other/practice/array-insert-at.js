
const insertAt = (arr, i, v) => [...arr.slice(0, i), v, ...arr.slice(i)];
module.exports = insertAt;
