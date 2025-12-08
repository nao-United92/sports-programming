// Passes the result of each function to the next one, from left to right.
const pipe = (...fns) => (initialValue) => fns.reduce((acc, fn) => fn(acc), initialValue);

module.exports = pipe;
