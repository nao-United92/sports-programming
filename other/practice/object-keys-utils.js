export const objectKeys = (obj) => {
  if (!obj || typeof obj !== 'object') return [];
  return Object.keys(obj);
};
