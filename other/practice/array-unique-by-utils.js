export const uniqueBy = (arr, key) => {
  if (!Array.isArray(arr)) {
    throw new Error("The first argument must be an array.");
  }
  if (typeof key !== "string" && typeof key !== "function") {
    throw new Error("The key must be a string or a function.");
  }

  const seen = new Set();
  const getKeyValue = (item) => (typeof key === "function" ? key(item) : item[key]);

  return arr.filter((item) => {
    const keyValue = getKeyValue(item);
    if (seen.has(keyValue)) {
      return false;
    } else {
      seen.add(keyValue);
      return true;
    }
  });
};
