
export const paginate = (array, page, pageSize) => {
  if (!Array.isArray(array) || page <= 0 || pageSize <= 0) {
    return [];
  }

  const startIndex = (page - 1) * pageSize;
  return array.slice(startIndex, startIndex + pageSize);
};
