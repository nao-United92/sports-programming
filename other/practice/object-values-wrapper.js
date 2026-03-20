export const getValues = (obj) => {
  if (!obj || typeof obj !== 'object') return [];
  return Object.values(obj);
};
