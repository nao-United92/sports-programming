export const pull = (arr, ...args) => {
  const argState = Array.isArray(args[0]) ? args[0] : args;
  const pulled = arr.filter((v, i) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return arr;
};