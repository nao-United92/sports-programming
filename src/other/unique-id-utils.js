let idCounter = 0;

export const uniqueId = (prefix = '') => {
  idCounter++;
  return `${prefix}${idCounter}`;
};