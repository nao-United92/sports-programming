const arrayUnion = (a, b) => Array.from(new Set([...a, ...b]));

module.exports = arrayUnion;
