const without = (arr, ...values) => arr.filter(el => !values.includes(el));
module.exports = without;
