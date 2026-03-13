export const everyNth = (arr, nth) => (arr && arr.length > 0 ? arr.filter((_, i) => (i + 1) % nth === 0) : []);
