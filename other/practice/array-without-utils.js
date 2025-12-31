// Creates an array excluding all given values.
export const without = (arr, ...values) => arr.filter(item => !values.includes(item));
