const negate = (predicate) => (...args) => !predicate(...args);

module.exports = negate;
