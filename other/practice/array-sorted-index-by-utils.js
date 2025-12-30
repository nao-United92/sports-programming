// Sorts an array of objects by a specified property in ascending order
export const sortByProperty = (arr, prop) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  return arr.sort((a, b) => {
    if (a[prop] < b[prop]) {
      return -1;
    }
    if (a[prop] > b[prop]) {
      return 1;
    }
    return 0;
  });
};