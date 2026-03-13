export const intersection = (arr, ...args) =>
  arr.filter((val) => args.every((arg) => arg.includes(val)));
