export const groupBy = (arr, key) => {
  if (!Array.isArray(arr)) {
    throw new Error("The first argument must be an array.");
  }
  if (typeof key !== "string" && typeof key !== "function") {
    throw new Error("The key must be a string or a function.");
  }

  const getKeyValue = (item) => (typeof key === "function" ? key(item) : item[key]);

  return arr.reduce((acc, item) => {
    const keyValue = getKeyValue(item);
    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }
    acc[keyValue].push(item);
    return acc;
  }, {});
};
