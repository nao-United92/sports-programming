export const objectEntries = (obj) => {
  if (!obj || typeof obj !== 'object') return [];
  return Object.entries(obj);
};
