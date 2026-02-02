const union = (arrA, arrB) => [...new Set([...arrA, ...arrB])];

module.exports = union;