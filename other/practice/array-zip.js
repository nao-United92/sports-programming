export const zip = (...args) => {
  const maxLength = Math.max(...args.map((arg) => arg.length));
  return Array.from({ length: maxLength }).map((_, i) => args.map((arg) => arg[i]));
};
