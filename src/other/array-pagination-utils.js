/**
 * Paginates an array, returning a specific page of items.
 *
 * @param {Array} array The array of items to paginate.
 * @param {number} pageNumber The 1-based index of the page to retrieve.
 * @param {number} pageSize The maximum number of items per page.
 * @returns {Array} An array containing the items for the specified page.
 */
export const paginate = (array, pageNumber, pageSize) => {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }

  const parsedPageNumber = parseInt(pageNumber, 10);
  const parsedPageSize = parseInt(pageSize, 10);

  if (isNaN(parsedPageNumber) || parsedPageNumber < 1 || isNaN(parsedPageSize) || parsedPageSize < 1) {
    return [];
  }

  const startIndex = (parsedPageNumber - 1) * parsedPageSize;
  const endIndex = startIndex + parsedPageSize;

  if (startIndex >= array.length) {
    return []; // Page is out of bounds
  }

  return array.slice(startIndex, endIndex);
};
